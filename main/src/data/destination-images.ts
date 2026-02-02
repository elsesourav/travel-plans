/**
 * Curated destination images from Unsplash
 * Each destination has 6 high-quality images relevant to the location
 * Image URLs use Unsplash's optimization parameters for best quality
 *
 * Last updated: February 2026
 */

export interface DestinationImages {
  slug: string;
  name: string;
  images: string[];
  keywords: string[];
}

export const destinationImages: DestinationImages[] = [
  {
    slug: "andaman-islands",
    name: "Andaman Islands",
    keywords: ["beach", "tropical", "island", "coral", "diving", "Havelock"],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80", // Turquoise waters
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&q=80", // Tropical beach
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80", // Clear ocean
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80", // Palm trees
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&q=80", // Underwater coral
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", // Sandy beach
    ],
  },
  {
    slug: "araku-valley",
    name: "Araku Valley",
    keywords: [
      "valley",
      "coffee",
      "tribal",
      "Eastern Ghats",
      "train",
      "Borra Caves",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Valley mountains
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80", // Coffee plantation
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Scenic valley
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80", // Green hills
      "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=1200&q=80", // Train journey
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", // Misty mountains
    ],
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    keywords: ["Ram Mandir", "temple", "Saryu River", "pilgrimage", "Hindu"],
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple architecture
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80", // Hindu temple
      "https://images.unsplash.com/photo-1564804955966-f6f41ea4d3d4?w=1200&q=80", // River ghat
      "https://images.unsplash.com/photo-1623070770273-cb0b85c21b5a?w=1200&q=80", // Temple spire
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80", // Evening aarti
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200&q=80", // Temple lights
    ],
  },
  {
    slug: "bir-billing",
    name: "Bir Billing",
    keywords: ["paragliding", "Himachal", "adventure", "Tibetan", "monastery"],
    images: [
      "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200&q=80", // Paragliding
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Mountain view
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Valley landscape
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=1200&q=80", // Green hills
      "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80", // Buddhist monastery
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Sunrise mountains
    ],
  },
  {
    slug: "bodh-gaya",
    name: "Bodh Gaya",
    keywords: [
      "Buddha",
      "Mahabodhi Temple",
      "Bodhi Tree",
      "Buddhist",
      "pilgrimage",
    ],
    images: [
      "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80", // Buddhist temple
      "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200&q=80", // Temple architecture
      "https://images.unsplash.com/photo-1555400082-645c3d19f7b9?w=1200&q=80", // Buddha statue
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple complex
      "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80", // Monastery
      "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80", // Buddha Park
    ],
  },
  {
    slug: "chakrata",
    name: "Chakrata",
    keywords: [
      "waterfall",
      "Tiger Falls",
      "deodar",
      "Uttarakhand",
      "cantonment",
    ],
    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80", // Forest
      "https://images.unsplash.com/photo-1432889490240-84df33d47091?w=1200&q=80", // Waterfall
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1200&q=80", // Deodar trees
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1200&q=80", // Mountain view
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Forest trail
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80", // Misty hills
    ],
  },
  {
    slug: "chopta",
    name: "Chopta",
    keywords: ["Tungnath", "Chandrashila", "trek", "snow", "Himalaya"],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Snow mountains
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80", // Himalayan peaks
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&q=80", // Snow trek
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80", // Mountain landscape
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Alpine meadow
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Sunset mountains
    ],
  },
  {
    slug: "daringbadi",
    name: "Daringbadi",
    keywords: [
      "Kashmir of Odisha",
      "pine",
      "coffee",
      "hill station",
      "Kondh tribe",
    ],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Pine forest
      "https://images.unsplash.com/photo-1432889490240-84df33d47091?w=1200&q=80", // Waterfall
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80", // Green hills
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1200&q=80", // Forest trail
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Pine grove
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Misty landscape
    ],
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    keywords: ["Om Beach", "Kudle Beach", "temple", "Karnataka", "beach trek"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", // Sandy beach
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80", // Beach sunset
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80", // Beach cove
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&q=80", // Ocean waves
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1200&q=80", // Coastal rocks
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", // Beach huts
    ],
  },
  {
    slug: "hampi",
    name: "Hampi",
    keywords: [
      "Vijayanagara",
      "ruins",
      "boulders",
      "UNESCO",
      "temple",
      "Karnataka",
    ],
    images: [
      "https://images.unsplash.com/photo-1600100397608-71b5b3c39d52?w=1200&q=80", // Hampi ruins
      "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=1200&q=80", // Stone chariot
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80", // Temple ruins
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80", // Boulder landscape
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80", // Virupaksha Temple
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80", // Sunset ruins
    ],
  },
  {
    slug: "khonoma",
    name: "Khonoma",
    keywords: ["green village", "Nagaland", "Angami", "conservation", "tribal"],
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Green forest
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Village hills
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Terraced fields
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80", // Forest valley
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", // Mountain village
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Green landscape
    ],
  },
  {
    slug: "kinnaur",
    name: "Kinnaur",
    keywords: [
      "apple orchards",
      "Kinnaur Kailash",
      "Chitkul",
      "Sutlej",
      "Himachal",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain valley
      "https://images.unsplash.com/photo-1477768663691-75454fd8e870?w=1200&q=80", // Snow peaks
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80", // Apple orchards
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80", // River valley
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Mountain road
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Himalayan view
    ],
  },
  {
    slug: "konark",
    name: "Konark",
    keywords: ["Sun Temple", "UNESCO", "chariot", "Odisha", "architecture"],
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple architecture
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=80", // Temple wheel
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&q=80", // Ancient ruins
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80", // Stone carving
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80", // Temple structure
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80", // Heritage site
    ],
  },
  {
    slug: "leh-ladakh",
    name: "Leh-Ladakh",
    keywords: [
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "monastery",
      "high altitude",
    ],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80", // Pangong Lake
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80", // Leh Palace
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&q=80", // Mountain pass
      "https://images.unsplash.com/photo-1572697390930-7339a01a4f6d?w=1200&q=80", // Monastery
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=1200&q=80", // Desert mountains
      "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80", // Thiksey Monastery
    ],
  },
  {
    slug: "majuli",
    name: "Majuli",
    keywords: ["river island", "Brahmaputra", "satra", "Assam", "mask making"],
    images: [
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=1200&q=80", // River island
      "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=1200&q=80", // Paddy fields
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=80", // Village life
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200&q=80", // Sunset river
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80", // Green fields
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", // Rural landscape
    ],
  },
  {
    slug: "mandarmani",
    name: "Mandarmani",
    keywords: ["beach", "red crabs", "drivable beach", "West Bengal", "sea"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", // Sandy beach
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80", // Beach sunset
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&q=80", // Ocean view
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80", // Beach resort
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1200&q=80", // Coastal drive
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80", // Beach waves
    ],
  },
  {
    slug: "mcleod-ganj",
    name: "McLeod Ganj",
    keywords: ["Dalai Lama", "Tibetan", "Dharamshala", "Triund", "monastery"],
    images: [
      "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80", // Buddhist monastery
      "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80", // Tibetan temple
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain view
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Himalayan peaks
      "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80", // Prayer flags
      "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200&q=80", // Temple bells
    ],
  },
  {
    slug: "pelling",
    name: "Pelling",
    keywords: ["Kanchenjunga", "Pemayangtse", "Sikkim", "monastery", "skywalk"],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Kanchenjunga view
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80", // Snow mountains
      "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80", // Buddhist monastery
      "https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=1200&q=80", // Mountain sunrise
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Valley view
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Himalayan landscape
    ],
  },
  {
    slug: "puri",
    name: "Puri",
    keywords: [
      "Jagannath Temple",
      "Rath Yatra",
      "beach",
      "Odisha",
      "pilgrimage",
    ],
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple architecture
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", // Beach
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80", // Beach sunset
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80", // Ocean waves
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&q=80", // Coastal view
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80", // Temple tower
    ],
  },
  {
    slug: "shantiniketan",
    name: "Shantiniketan",
    keywords: [
      "Tagore",
      "Visva-Bharati",
      "art",
      "Poush Mela",
      "Bengal culture",
    ],
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80", // Art sculpture
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", // University campus
      "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?w=1200&q=80", // Art murals
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80", // Cultural heritage
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Sal forest
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Rural landscape
    ],
  },
  {
    slug: "spiti-valley",
    name: "Spiti Valley",
    keywords: [
      "Key Monastery",
      "Chandratal",
      "Kaza",
      "cold desert",
      "high altitude",
    ],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80", // Chandratal Lake
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain valley
      "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80", // Key Monastery
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Barren mountains
      "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80", // Buddhist monastery
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Desert landscape
    ],
  },
  {
    slug: "sundarbans",
    name: "Sundarbans",
    keywords: [
      "mangrove",
      "Royal Bengal Tiger",
      "UNESCO",
      "boat safari",
      "delta",
    ],
    images: [
      "https://images.unsplash.com/photo-1534759926787-89fa60520495?w=1200&q=80", // Tiger
      "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200&q=80", // Mangrove forest
      "https://images.unsplash.com/photo-1585063560546-28db14a0a7d5?w=1200&q=80", // River boat
      "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=1200&q=80", // Forest creek
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80", // Waterways
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Dense forest
    ],
  },
  {
    slug: "tawang",
    name: "Tawang",
    keywords: [
      "Tawang Monastery",
      "Sela Pass",
      "Arunachal",
      "Buddhist",
      "war memorial",
    ],
    images: [
      "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80", // Buddhist monastery
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain view
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Snow mountains
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // High altitude
      "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80", // Monastery
      "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80", // Buddha statue
    ],
  },
  {
    slug: "tirthan-valley",
    name: "Tirthan Valley",
    keywords: [
      "GHNP",
      "trout fishing",
      "riverside",
      "Jalori Pass",
      "Serolsar Lake",
    ],
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80", // Forest river
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Valley view
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Mountains
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80", // River stream
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Forest trail
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Misty mountains
    ],
  },
  {
    slug: "tso-moriri",
    name: "Tso Moriri",
    keywords: [
      "high altitude lake",
      "Changthang",
      "Kiang",
      "Changpa",
      "Ladakh",
    ],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80", // Blue lake
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain lake
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Barren mountains
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&q=80", // High altitude
      "https://images.unsplash.com/photo-1572697390930-7339a01a4f6d?w=1200&q=80", // Desert plateau
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Stargazing view
    ],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    keywords: [
      "Mahakaleshwar",
      "Jyotirlinga",
      "Shipra River",
      "Kumbh Mela",
      "temple",
    ],
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple architecture
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200&q=80", // Temple lights
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80", // Hindu temple
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80", // Ghat scene
      "https://images.unsplash.com/photo-1623070770273-cb0b85c21b5a?w=1200&q=80", // Temple spire
      "https://images.unsplash.com/photo-1564804955966-f6f41ea4d3d4?w=1200&q=80", // River ghat
    ],
  },
  {
    slug: "valparai",
    name: "Valparai",
    keywords: [
      "tea estate",
      "Anamalai Hills",
      "lion-tailed macaque",
      "Athirapally",
    ],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Tea plantation
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80", // Hill station
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Green hills
      "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&q=80", // Forest view
      "https://images.unsplash.com/photo-1432889490240-84df33d47091?w=1200&q=80", // Waterfall
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Misty mountains
    ],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    keywords: [
      "Ganga Aarti",
      "ghats",
      "Kashi Vishwanath",
      "Sarnath",
      "spiritual",
    ],
    images: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80", // Ganga ghats
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200&q=80", // Evening aarti
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80", // Boat ride
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80", // Temple view
      "https://images.unsplash.com/photo-1564804955966-f6f41ea4d3d4?w=1200&q=80", // Ghat scene
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200&q=80", // Diya lights
    ],
  },
  {
    slug: "yuksom",
    name: "Yuksom",
    keywords: [
      "Goecha La",
      "Dubdi Monastery",
      "Sikkim",
      "Kanchenjunga",
      "trek",
    ],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Kanchenjunga
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Mountain view
      "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80", // Monastery
      "https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=1200&q=80", // Forest trail
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Cardamom forest
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80", // Alpine view
    ],
  },
  {
    slug: "ziro-valley",
    name: "Ziro Valley",
    keywords: [
      "Apatani",
      "rice terraces",
      "Ziro Music Festival",
      "Arunachal Pradesh",
    ],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", // Valley view
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", // Rice terraces
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", // Green hills
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", // Misty valley
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Pine forest
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80", // Scenic landscape
    ],
  },
];

/**
 * Helper function to get images for a specific destination
 */
export function getDestinationImages(slug: string): string[] {
  const destination = destinationImages.find((d) => d.slug === slug);
  return destination?.images || [];
}

/**
 * Helper function to get a random image for a destination
 */
export function getRandomDestinationImage(slug: string): string | undefined {
  const images = getDestinationImages(slug);
  if (images.length === 0) return undefined;
  return images[Math.floor(Math.random() * images.length)];
}

/**
 * Helper function to get first image (hero image) for a destination
 */
export function getHeroImage(slug: string): string | undefined {
  const images = getDestinationImages(slug);
  return images[0];
}

export default destinationImages;
