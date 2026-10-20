(() => {
  const works = window.WORKS;
  const byId = Object.fromEntries(works.map((w) => [w.id, w]));
  const scene = document.getElementById("scene");
  const flood = document.getElementById("flood");
  const viewer = document.getElementById("viewer");
  const img = document.getElementById("viewer-img");
  const surfaceMap = document.getElementById("surface-map");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const visited = new Set();
  let current = null;
  let returnFocus = null;

  // ---- tally of waters found ----
  const drops = document.getElementById("tally-drops");
  works.forEach(() => drops.appendChild(Object.assign(document.createElement("span"), { className: "drop" })));

  function markVisited(id) {
    visited.add(id);
    [...drops.children].forEach((d, i) => d.classList.toggle("is-full", i < visited.size));
    document.getElementById("tally-count").textContent = visited.size;
    scene.querySelector(`.water[data-id="${id}"]`)?.classList.add("is-visited");
    document.querySelector(`#index-list li[data-id="${id}"]`)?.classList.add("is-visited");
  }

  // ---- index list below the scene ----
  const list = document.getElementById("index-list");
  works.forEach((w) => {
    const li = document.createElement("li");
    li.dataset.id = w.id;
    li.innerHTML = `<button type="button"><span class="num">${w.numeral}</span><span class="w">${w.water}</span><span class="t">${w.title}, ${w.date}</span></button>`;
    const btn = li.querySelector("button");
    btn.addEventListener("click", (e) => open(w.id, e));
    btn.addEventListener("mouseenter", () => hot(w.id, true));
    btn.addEventListener("mouseleave", () => hot(w.id, false));
    list.appendChild(li);
  });

  function hot(id, on) {
    scene.querySelector(`.water[data-id="${id}"]`)?.classList.toggle("is-hot", on);
  }

  // ---- scene ----
  scene.querySelectorAll(".water").forEach((g) => {
    g.addEventListener("click", (e) => {
      e.stopPropagation();
      ripple(e);
      open(g.dataset.id, e);
    });
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(g.dataset.id, e);
      }
    });
  });
  scene.addEventListener("click", ripple);

  // Draw an expanding ring where the visitor clicked, in scene coordinates.
  function ripple(e) {
    if (reduceMotion || !e.clientX) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(scene.getScreenCTM().inverse());
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ring.setAttribute("class", "touch-ripple");
    ring.setAttribute("cx", pt.x);
    ring.setAttribute("cy", pt.y);
    ring.setAttribute("rx", 14);
    ring.setAttribute("ry", 5);
    scene.appendChild(ring);
    ring.addEventListener("animationend", () => ring.remove());
  }

  // ---- viewer ----
  function fill(w) {
    const i = works.indexOf(w);
    const prev = works[(i + works.length - 1) % works.length];
    const next = works[(i + 1) % works.length];

    document.getElementById("viewer-water").textContent = `${w.numeral} · ${w.water}`;
    document.getElementById("viewer-title").textContent = w.title;
    document.getElementById("viewer-artist").textContent = `${w.artist}, ${w.date}`;
    document.getElementById("viewer-body").innerHTML = w.text.map((p) => `<p>${p}</p>`).join("");
    const meta = [
      ["Medium", w.medium],
      ["Dimensions", w.dimensions],
      ["Credit line", w.credit],
      ["Object number", w.accession],
    ];
    if (w.copyright) meta.push(["Copyright", w.copyright]);
    document.getElementById("viewer-meta").innerHTML = meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
    document.getElementById("viewer-link").href = w.url;
    document.getElementById("viewer-note").textContent = w.restricted
      ? "Shown at the reduced size the museums provide for works under copyright."
      : "";

    img.classList.toggle("is-restricted", w.restricted);
    img.alt = `${w.title}, ${w.artist}, ${w.date}`;
    img.src = w.image;

    document.querySelector("#viewer-prev .navbtn__label").textContent = prev.water;
    document.querySelector("#viewer-next .navbtn__label").textContent = next.water;
    viewer.dataset.prev = prev.id;
    viewer.dataset.next = next.id;
  }

  // Animate the displacement filter down to zero so the image settles like water.
  function settle() {
    if (reduceMotion) return;
    img.style.filter = "url(#surface)";
    const start = performance.now();
    const dur = 1800;
    (function step(now) {
      const t = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      surfaceMap.setAttribute("scale", (60 * (1 - ease)).toFixed(2));
      if (t < 1) requestAnimationFrame(step);
      else img.style.filter = "";
    })(start);
  }

  function surface() {
    viewer.classList.remove("is-surfaced");
    const show = () => {
      // force a reflow so the transition replays when moving between works
      void viewer.offsetWidth;
      viewer.classList.add("is-surfaced");
      settle();
    };
    if (img.complete && img.naturalWidth) show();
    else img.onload = img.onerror = show;
  }

  function open(id, e) {
    const w = byId[id];
    if (!w) return;
    const wasOpen = !viewer.hidden;
    current = id;
    fill(w);
    markVisited(id);
    history.replaceState(null, "", `#${id}`);

    if (wasOpen) {
      viewer.scrollTop = 0;
      surface();
      return;
    }

    returnFocus = document.activeElement;
    const x = e && e.clientX ? `${e.clientX}px` : "50%";
    const y = e && e.clientY ? `${e.clientY}px` : "50%";
    flood.style.setProperty("--x", x);
    flood.style.setProperty("--y", y);
    flood.classList.add("is-open");
    document.body.classList.add("is-viewing");

    setTimeout(() => {
      viewer.hidden = false;
      viewer.scrollTop = 0;
      document.getElementById("viewer-close").focus({ preventScroll: true });
      surface();
    }, reduceMotion ? 0 : 550);
  }

  function close() {
    if (viewer.hidden) return;
    viewer.classList.remove("is-surfaced");
    viewer.hidden = true;
    flood.classList.remove("is-open");
    document.body.classList.remove("is-viewing");
    history.replaceState(null, "", location.pathname + location.search);
    current = null;
    returnFocus?.focus?.({ preventScroll: true });
  }

  document.getElementById("viewer-close").addEventListener("click", close);
  document.getElementById("viewer-prev").addEventListener("click", () => open(viewer.dataset.prev));
  document.getElementById("viewer-next").addEventListener("click", () => open(viewer.dataset.next));

  document.addEventListener("keydown", (e) => {
    if (viewer.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") open(viewer.dataset.next);
    else if (e.key === "ArrowLeft") open(viewer.dataset.prev);
    else if (e.key === "Tab") {
      // keep focus inside the viewer while it is open
      const items = [...viewer.querySelectorAll("button, a[href]")];
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // deep links: index.html#river opens that work directly
  const initial = location.hash.slice(1);
  if (byId[initial]) open(initial);
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (byId[id]) open(id);
  });
})();
