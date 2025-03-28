const attributes = [
    "T Shirt",
    "Casual Button Up Shirt",
    "Activewear Shirt",
    "Polo",
    "Dress Shirt",
    "Tank Top",
    "Leotard",
    "Blous",
    "Bodysuit",
    "2(X)IST",
    "2XU",
    "5.11 Tactical",
    "adida",
    "adidas Golf",
    "adidas Original",
    "adidas Outdoor",
    "AG Jean",
    "AllSaint",
    "Alternative",
    "Arc'teryx",
    "Ariat",
    "Armani Exchange",
    "ASICS",
    "Barefoot Dream",
    "BENSON",
    "Beyond Yoga",
    "Billabong",
    "Billy Reid",
    "Black Clover",
    "Blue Marble Pari",
    "Bogner Fire + Ice",
    "BOSS",
    "Brixton",
    "Brook",
    "Buffalo David Bitton",
    "BUGATCHI",
    "Bulwark FR",
    "Burton",
    "Buttercloth",
    "C9 Champion",
    "Callaway",
    "Calvin Klein",
    "Calvin Klein Underwear",
    "Capezio",
    "Carhartt",
    "Carrots By Anwar Carrot",
    "Caterpillar",
    "Champion",
    "Champion LIFE",
    "CHARLY",
    "COLMAR",
    "Columbia",
    "Complexcon Rokit",
    "Cotopaxi",
    "Craft",
    "Cutter & Buck",
    "DC",
    "Deus Ex Machina",
    "Dick",
    "DIM MAK",
    "Docker",
    "EGONlab",
    "Emerica",
    "Emporio Armani",
    "FACT.",
    "Faherty",
    "Fair Harbor",
    "Faith Connexion",
    "Falke",
    "FDMTL",
    "Fila",
    "Fjällräven",
    "Flylow",
    "Fourlap",
    "Fred Perry",
    "Fundamental Coast",
    "G-Star",
    "Good Man Brand",
    "Goorin Brother",
    "Han",
    "Hanro",
    "Helly Hansen",
    "HOM",
    "Hot Chilly",
    "Hudson Jean",
    "Hurley",
    "Ice Cream",
    "Icebreaker",
    "Instant Message",
    "InstantRecoveryMD",
    "Jockey",
    "John Varvato",
    "johnnie-O",
    "Johnny Bigg",
    "Johnston & Murphy",
    "Just Cavalli",
    "Kappa",
    "Karl Lagerfeld Pari",
    "Kenneth Cole",
    "L.L.Bean",
    "LABEL",
    "Lacoste",
    "Lee",
    "Legendary Whitetail",
    "Levi's®",
    "Levi's® Men",
    "Levi's® Premium",
    "Life is Good",
    "Linksoul",
    "Liverpool",
    "Lucky Brand",
    "LVXWA",
    "Madewell",
    "Marmot",
    "Mavi Jean",
    "Mitchell & Nes",
    "Mod-o-doc",
    "Mountain Hardwear",
    "Mountain Khaki",
    "Mystery Ranch",
    "n:philanthropy",
    "Nautica",
    "New Balance",
    "Nick Graham",
    "Nike",
    "The Normal Brand",
    "The North Face",
    "O'Neill",
    "Oakley",
    "Obermeyer",
    "On",
    "Original Penguin",
    "Original Penguin Golf",
    "The Original Retro Brand",
    "Outerknown",
    "PACT",
    "Paige",
    "Pair of Thiev",
    "Parks Project",
    "Pendleton",
    "Pepe Jean",
    "Perry Elli",
    "Pleasur",
    "Polarmax",
    "Polo Ralph Lauren",
    "Prana",
    "Psycho Bunny",
    "PUMA",
    "PUMA Golf",
    "Quiksilver",
    "Quiksilver Waterman",
    "Red Kap",
    "Reebok",
    "Rhone",
    "Rhythm",
    "Rip Curl",
    "Robert Graham",
    "Rodd & Gunn",
    "ROKIT",
    "Roper",
    "Royal Robbin",
    "RVCA",
    "RYU",
    "Salty Crew",
    "Salty Dog",
    "Saucony",
    "SAXX UNDERWEAR",
    "Scotch & Soda",
    "Seiru",
    "Selected Homme",
    "Silvert",
    "SKECHERS",
    "Smart Adaptive Clothing",
    "Smartwool",
    "Southern Tide",
    "Spanx for Men",
    "Speedo",
    "Spyder",
    "Stacy Adam",
    "Stampd",
    "Straight Down",
    "Superdry",
    "tasc Performance",
    "Taylor Stitch",
    "Ted Baker",
    "tentree",
    "Theory",
    "Timberland",
    "Timberland PRO",
    "Toad&Co",
    "Tom & Teddy",
    "Tommy Bahama",
    "Tommy Hilfiger",
    "Tommy Hilfiger Adaptive",
    "TravisMathew",
    "True Religion",
    "Tyndale FRC",
    "UFC",
    "UGG",
    "Umbro",
    "Under Armour",
    "Under Armour Golf",
    "UNTUCKit",
    "Van Heusen",
    "Van",
    "VENUM",
    "Vilebrequin",
    "Vince",
    "Vineyard Vin",
    "VISSLA",
    "Volcom",
    "Western Rise",
    "Wolverine",
    "Wrangler",
    "ZANEROBE",
    "Blue",
    "Black",
    "White",
    "Gray",
    "Navy",
    "Green",
    "Multi",
    "Red",
    "Brown",
    "Pink",
    "Beige",
    "Orange",
    "Olive",
    "Purple",
    "Yellow",
    "Khaki",
    "Burgundy",
    "Tan",
    "Bone",
    "Taupe",
    "Silver",
    "Coral",
    "Gold",
    "Pewter",
    "Neutral",
    "Unknown Color",
    "Mahogany",
    "Bronze",
    "Metallic",
    "Animal Print",
    "Casual",
    "Athletic",
    "Outdoor",
    "Dres",
    "Office & Career",
    "Work & Duty",
    "Athleisure",
    "Wedding",
    "School Uniform",
    "Prom & Homecoming",
    "Cotton",
    "Polyester",
    "Elastane",
    "Spandex",
    "Jersey",
    "Nylon",
    "Flannel",
    "Viscose",
    "Linen",
    "Rayon",
    "Mesh",
    "Modal",
    "Lyocell",
    "Pique",
    "Wool",
    "Tencel",
    "Twill",
    "Hemp",
    "Lycra",
    "Polyamide",
    "Silk",
    "Chambray",
    "Fleece",
    "Cotton Blend",
    "Chamoi",
    "Denim",
    "Corduroy",
    "Seersucker",
    "Polyester Blend",
    "Terry",
    "Microfiber",
    "Nylon Blend",
    "Taffeta",
    "Manmade",
    "Tricot",
    "Chiffon",
    "Rayon Blend",
    "Tweed",
    "Canva",
    "Cashmere",
    "Ramie",
    "Wool Blend",
    "Solid",
    "Plaid",
    "Graphic",
    "Heathered",
    "Striped",
    "Floral",
    "Screenprint",
    "Checkered",
    "Camo",
    "Geometric",
    "Tie-Dye",
    "Logo",
    "Jacquard",
    "Polka Dot",
    "Space Dye",
    "Ombre",
    "Animal Print",
    "Dip-Dyed",
    "Paisley",
    "Distressed",
    "Patchwork",
    "Quilted",
]

module.exports = attributes