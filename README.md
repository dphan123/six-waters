# Six Waters

An interactive online exhibition of six works from the Harvard Art Museums on the theme of water.

Six bodies of water are hidden in one illustrated landscape: a well, an aqueduct, rain, a pond, a river and the sea. Hover over one to find it, and click it to flood the screen and bring its work of art to the surface.

| | Water | Work |
|---|---|---|
| I | The Well | *A Prince Receives a Water Jug from a Young Woman at a Well*, Kishangarh, c. 1745 (1972.350) |
| II | The Aqueduct | Robert Dawson, *Owens Valley Water Leaving Owens Valley, California*, 1989 (2.2002.547) |
| III | The Rain | Sarah Miriam Peale, *Still Life with Watermelon*, 1822 (2006.4) |
| IV | The Pond | Kano Yasunobu, *Black Birds and Tree Chickens in Pond Amid Lotus and Water Plantain*, c. 1683 (1943.56.21.11) |
| V | The River | *Krishna Swims with the Gopis*, Kangra(?), mid-19th century (1971.135) |
| VI | The Sea | Wan Qingli, *Gazing at the Moon*, 1982 (2017.302) |

## Files

- `index.html`: the page and the SVG landscape
- `style.css`: layout, typography and animation
- `works.js`: object data and exhibition texts (edit the texts here)
- `main.js`: interaction

The site is plain HTML, CSS and JavaScript, with no build step.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

Push this folder to a repository. Then go to **Settings → Pages**, set the source to the `main` branch and the `/ (root)` folder, and save.

## Images and rights

Images load directly from the Harvard Art Museums IIIF image server. Copies are not stored in this repository. The museums allow use of their website images for personal, noncommercial and educational purposes. The two works still under copyright (Dawson and Wan Qingli) are shown only at the reduced size the museums provide. This is an independent project and is not affiliated with the Harvard Art Museums.

## License

The code and exhibition texts are released under the [MIT License](LICENSE). The works of art and their images are not covered by it.
