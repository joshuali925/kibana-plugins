
const sampleData = {
  france: {
    description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.",
    y: [0, 0, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 14, 18, 38, 57, 100, 130, 191, 204, 285, 377, 653, 949, 1126, 1209, 1784, 2281, 2281, 3661, 4469, 4499, 6633, 7652, 9043, 10871, 12612, 14282, 16018, 19856, 22304, 25233, 29155, 32964, 37575, 40174, 44550, 52128, 56989, 59105, 64338, 89953, 92839, 98010, 109069, 112950, 117749, 124869, 129654, 132591, 136779, 130253],
  },
  italy: {
    description: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine.",
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 20, 62, 155, 229, 322, 453, 655, 888, 1128, 1694, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 12462, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80589, 86498, 92472, 97689, 101739, 105792, 110574, 115242, 119827, 124632, 128948, 132547, 135586, 139422, 143626, 147577, 152271, 156363, 159516, 162488],
  },
  spain: {
    description: "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures.",
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 13, 15, 32, 45, 84, 120, 165, 222, 259, 400, 500, 673, 1073, 1695, 2277, 2277, 5232, 6391, 7798, 9942, 11748, 13910, 17963, 20410, 25374, 28768, 35136, 39885, 49515, 57786, 65719, 73235, 80110, 87956, 95923, 104118, 112065, 119199, 126168, 131646, 136675, 141942, 148220, 153222, 158273, 163027, 166831, 170099, 172541],
  },
  united_kingdom: {
    description: "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe.",
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 15, 20, 23, 36, 40, 51, 85, 115, 163, 206, 273, 321, 382, 456, 456, 798, 1140, 1140, 1543, 1950, 2626, 2689, 3983, 5018, 5683, 6650, 8077, 9529, 11658, 14543, 17089, 19522, 22141, 25150, 29474, 33718, 38168, 41903, 47806, 51608, 55242, 60733, 65077, 73758, 78991, 84279, 88621, 93873],
  },
  united_states: {
    description: "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.",
    y: [1, 1, 2, 2, 5, 5, 5, 5, 5, 7, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 15, 15, 15, 51, 51, 57, 58, 60, 68, 74, 98, 118, 149, 217, 262, 402, 518, 583, 959, 1281, 1663, 2179, 2727, 3499, 4632, 6421, 7783, 13747, 19273, 25600, 33276, 43847, 53740, 65778, 83836, 101657, 121465, 140909, 161831, 188172, 213372, 243762, 275586, 308853, 337072, 366667, 396223, 429052, 461437, 496535, 526396, 555313, 580619, 607670],
  },
}

for (const country in sampleData) {
  sampleData[country].x = Array.from({ length: sampleData[country].y.length }, (x, i) => i + 1)
}

export default sampleData;