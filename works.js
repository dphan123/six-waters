// The six works, keyed to the bodies of water in the scene.
// Images are served by the Harvard Art Museums IIIF image server. Works still
// under copyright are only offered at 256px, so we request them at that size.
const IIIF = "https://images.harvardartmuseums.org/";

window.WORKS = [
  {
    id: "well",
    numeral: "I",
    water: "The Well",
    title: "A Prince Receives a Water Jug from a Young Woman at a Well",
    artist: "Indian, Kishangarh, Rajasthan",
    date: "c. 1745",
    medium: "Opaque watercolor and gold on paper",
    dimensions: "29.1 × 17.2 cm",
    credit: "Harvard Art Museums/Arthur M. Sackler Museum, Gift of John Kenneth Galbraith",
    accession: "1972.350",
    url: "https://harvardartmuseums.org/collections/object/303397",
    image: IIIF + "urn-3:HUAM:44855_dynmc:IMAGE/full/!1600,1600/0/default.jpg",
    restricted: false,
    text: [
      "In the dry country of Rajasthan, a well was more than a water source. It was a place where people met. Here a Kishangarh painter turns the well into a scene of courtship: a prince in a tall plumed turban leans from his blue-gray horse to take a small gold water jug from a young woman in yellow. Behind her, her companions talk at the mouth of the well, one of them still holding a rope that runs down into the shaft, and four water vessels wait along the railing.",
      "The romance rests on everyday work. Painted around 1745, as the Kishangarh school was refining its elegant, elongated figures, the folio shows how one offer of water could carry hospitality, desire, and rank all at once."
    ]
  },
  {
    id: "aqueduct",
    numeral: "II",
    water: "The Aqueduct",
    title: "Owens Valley Water Leaving Owens Valley, California",
    artist: "Robert Dawson, American (20th century)",
    date: "1989",
    medium: "Gelatin silver print",
    dimensions: "image: 36.4 × 46.7 cm",
    credit: "Harvard Art Museums/Fogg Museum, Transfer from the Carpenter Center for the Visual Arts",
    accession: "2.2002.547",
    url: "https://harvardartmuseums.org/collections/object/159515",
    image: IIIF + "urn-3:HUAM:INV026860_dynmc:IMAGE/full/!256,256/0/default.jpg",
    restricted: true,
    copyright: "© Robert Dawson",
    text: [
      "This is the one body of water in the exhibition that we cannot see. A great pipe runs straight down the center of Robert Dawson’s photograph and on toward the mountains, carrying the Owens Valley’s water to Los Angeles, more than two hundred miles to the south. After the Los Angeles Aqueduct opened in 1913, Owens Lake dried to a salt flat, and the valley’s farms and ecology changed for good.",
      "Dawson made this print for <em>Farewell, Promised Land</em>, his survey of California’s changing environment. He uses the familiar look of Western landscape photography to show water defined by its absence and by where it is going."
    ]
  },
  {
    id: "rain",
    numeral: "III",
    water: "The Rain",
    title: "Still Life with Watermelon",
    artist: "Sarah Miriam Peale, American (1800–1885)",
    date: "1822",
    medium: "Oil on panel",
    dimensions: "46.4 × 67 cm",
    credit: "Harvard Art Museums/Fogg Museum",
    accession: "2006.4",
    url: "https://harvardartmuseums.org/collections/object/4988",
    image: IIIF + "urn-3:HUAM:DDC100622_dynmc:IMAGE/full/!1600,1600/0/default.jpg",
    restricted: false,
    text: [
      "Not all water lies in a landscape. Some of it is held in fruit. In Sarah Miriam Peale’s <em>Still Life with Watermelon</em>, the split melon’s red flesh glistens, a halved melon holds a pool of juice, and green grapes catch the light like raindrops. The painting is a season’s rainfall, gathered and made visible.",
      "Peale was one of the first women in the United States to work as a professional artist. She trained with her father, James Peale, within the large family of painters led by her uncle Charles Willson Peale. In this panel, one of her finest works, every fruit is ripe and unblemished, painted at the moment just before it would begin to spoil."
    ]
  },
  {
    id: "pond",
    numeral: "IV",
    water: "The Pond",
    title: "Black Birds and Tree Chickens in Pond Amid Lotus and Water Plantain",
    artist: "Kano Yasunobu, Japanese (1613–1685)",
    date: "c. 1683, Edo period",
    medium: "Album leaf; ink, color, and gold on silk",
    dimensions: "26.8 × 43.0 cm",
    credit: "Harvard Art Museums/Arthur M. Sackler Museum, Bequest of Grenville L. Winthrop",
    accession: "1943.56.21.11",
    url: "https://harvardartmuseums.org/collections/object/199503",
    image: IIIF + "urn-3:HUAM:CARP14557_dynmc:IMAGE/full/!1600,1600/0/default.jpg",
    restricted: false,
    text: [
      "Dark waterbirds with red-tipped bills lead their young through the shallows, past lotus leaves and the pale blue flowers of water plantain. The pond itself is barely painted. A soft wash over the gold-flecked silk and a few floating leaves are all Kano Yasunobu needs to suggest still, shallow water.",
      "That economy was a hallmark of the Kano school, the painting workshop that served Japan’s shoguns. Yasunobu, who led one of its main branches, painted this leaf late in life for an album of flower-and-bird subjects by several Kano masters. The work is quiet and close to the ground: the pond seen at the eye level of the birds that live there."
    ]
  },
  {
    id: "river",
    numeral: "V",
    water: "The River",
    title: "Krishna Swims with the Gopis, possibly an illustration from the Bhagavata Purana",
    artist: "Indian, probably Kangra, Himachal Pradesh",
    date: "mid-19th century",
    medium: "Opaque watercolor and gold on paper",
    dimensions: "23.18 × 16.51 cm",
    credit: "Harvard Art Museums/Arthur M. Sackler Museum, Gift of John Kenneth Galbraith",
    accession: "1971.135",
    url: "https://harvardartmuseums.org/collections/object/215670",
    image: IIIF + "urn-3:HUAM:ISL10315_dynmc:IMAGE/full/!1600,1600/0/default.jpg",
    restricted: false,
    text: [
      "The swirling Yamuna River becomes a playground. The dark-skinned god Krishna teases the gopis, the women who herd cattle, and catches one as she laughingly tries to swim away. Their play stands for <em>lila</em>, the divine game that inspires <em>bhakti</em>, a loving devotion to the god. On the bank, three women guard the bathers’ clothes, with Krishna’s peacock-feather crown and yellow dhoti folded neatly in a basket.",
      "The scene is probably set at Vrindavan, where Krishna spent his youth. Like the Kishangarh well scene in this exhibition, the folio came to Harvard from John Kenneth Galbraith, the economist and U.S. ambassador to India, whose gifts built much of the museums’ collection of Indian painting."
    ]
  },
  {
    id: "sea",
    numeral: "VI",
    water: "The Sea",
    title: "Gazing at the Moon (眺月圖)",
    artist: "Wan Qingli 萬青力, Chinese (1945–2017)",
    date: "1982, inscribed 1985",
    medium: "Hanging scroll; blue pigment on Xuan paper",
    dimensions: "painting proper: 103.5 × 75.5 cm",
    credit: "Harvard Art Museums/Arthur M. Sackler Museum, The Chu-tsing Li Collection, Gift of B U.K. Li in memory of Chu-tsing Li, Yao-wen Kwang Li, and Teri Ho Li",
    accession: "2017.302",
    url: "https://harvardartmuseums.org/collections/object/330482",
    image: IIIF + "urn-3:HUAM:768749:IMAGE/full/!256,256/0/default.jpg",
    restricted: true,
    copyright: "© Estate of Wan Qingli",
    text: [
      "Painted entirely in blue, this hanging scroll shows a woman standing alone on the rocks above a rolling sea. Her back is to us, and she watches the moon sink toward the horizon. Here the sea is something to contemplate rather than cross.",
      "Wan Qingli painted the scroll in Beijing in the summer of 1982. He added the inscription in 1985, while studying at the University of Kansas, where he gave the work to the art historian Chu-tsing Li. In the poem, the painter closes his books, lights incense, spreads out plain paper, and invites the bright moon to shine on the misty void. It describes this painting’s mood exactly."
    ]
  }
];
