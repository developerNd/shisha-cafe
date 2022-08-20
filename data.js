// list of menu data 
let menuItemsData = {
  "cat1": [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcvewrw",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    }
  ],
  "cat2": [
    {
      id: "ioytrhndcvwerwr",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "ioytrhndcvsdfs",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    }
  ]
};

let sheeshaMenuItems = {
  "Basic(49)": [
    {
      id: "doubleApple",
      name: "Double Apple"
    },
    {
      id: "grapeMint",
      name: "Grape Mint"
    },
    {
      id: "grape",
      name: "GRape"
    },
    {
      id: "blueberry",
      name: "Blueberry"
    },
    {
      id: "blueberryMint",
      name: "Blueberry Mint"
    },
    {
      id: "peach",
      name: "Peach"
    },
    {
      id: "orange",
      name: "Orange"
    },
    {
      id: "lychee",
      name: "Lychee"
    },
    {
      id: "lycheeMint",
      name: "Lychee Mint"
    },
    {
      id: "cherry",
      name: "Cherry"
    },
    {
      id: "rose",
      name: "Rose"
    },
    {
      id: "gumMint",
      name: "Gum Mint"
    },
    {
      id: "guava",
      name: "Guava"
    },
    {
      id: "pineapple",
      name: "Pineapple"
    },
    {
      id: "lemonMint",
      name: "Lemon Mint"
    },
    {
      id: "kiwi",
      name: "Kiwi"
    },
    {
      id: "kiwiMint",
      name: "Kiwi Mint"
    },
    {
      id: "mango",
      name: "Mango"
    },
    {
      id: "straberry",
      name: "Straberry"
    },
    {
      id: "vanillaMint",
      name: "Vanilla Mint"
    },
    {
      id: "sweetMelon",
      name: "Sweet Melon"
    },
    {
      id: "appleNakhla",
      name: "Apple Nkhla"
    }
  ],
  "Basic(49)": [
    {
      id: "blueberryPan",
      name: "Blueberry Pan"
    },
    {
      id: "bguavaPan",
      name: "Guava Pan"
    },
    {
      id: "bgrapePan",
      name: "Grape Pan"
    },
    {
      id: "lycheePan",
      name: "Lychee Pan"
    },
    {
      id: "orangePan",
      name: "Orange Pan"
    },
    {
      id: "mangoPan",
      name: "Mango Pan"
    },
    {
      id: "zafranPan",
      name: "Zafran Pan"
    },
    {
      id: "springWaterPan",
      name: "Spring-Water Pan"
    },
    {
      id: "kacchiKeyriPan",
      name: "Kacchi Keyri Pan"
    },
    {
      id: "vanillaPan",
      name: "Vanilla Pan"
    },
    {
      id: "kiwiPan",
      name: "Kiwi Pan"
    },
    {
      id: "cherryPan",
      name: "Cherry Pan"
    },
    {
      id: "strawberryPan",
      name: "Strawberry Pan"
    },
    {
      id: "passionPan",
      name: "Passion Pan"
    },
    {
      id: "commissionerPan",
      name: "Commissioner Pan"
    }
  ],
  "Mixed Blengs </br><p class='section_sub_heading'> Served With ICE-Cube(69)</p>": [
    {
      id: "appleGumMint",
      name: "Apple Gum Mint"
    },
    {
      id: "appleMintZafran",
      name: "Apple Mint Zafran"
    },
    {
      id: "springwaterPanZafran",
      name: "Springwater Pan Zafran"
    },
    {
      id: "orangeMangoPan",
      name: "Orange Mango Pan"
    },
    {
      id: "orangevanillaPan",
      name: "Orange Vanilla Pan"
    },
    {
      id: "commissionerMango",
      name: "Commissioner Mango"
    },
    {
      id: "orangeMintZafran",
      name: "Orange Mint ZAfran"
    },
    {
      id: "orangeGumSpringwater",
      name: "Orange Gum Springwater"
    },
    {
      id: "blueberryZafran",
      name: "Blueberry Zafran"
    },
    {
      id: "mangospringwaterMint",
      name: "Mango Springwater Mint"
    },
    {
      id: "guvaCommissionerPan",
      name: "Guva Commissioner Pan"
    },
    {
      id: "sweetmelonGrapePan",
      name: "Sweet Melon GRape Pan"
    },
    {
      id: "passionGuavaPan",
      name: "Passion Guava Pan"
    },
    {
      id: "sweetmelonwatermelonkiwi",
      name: "SweetMelon Watermelon Kiwi"
    },
    {
      id: "orangeLemonMint",
      name: "Orange Lemon Mint"
    },
    {
      id: "grapePineapplePan",
      name: "Grape Pineapple Pan"
    },
    {
      id: "mangopeachPan",
      name: "Mango Peach Pan"
    }
  ],
  "PREMIUM </br><p class='section_sub_heading'> Ice-Cube + Your Choice Of Fresh Juice(79)</p>": [
    {
      id: "panRoseMangoKiwi",
      name: "Pan Rose Mango Kiwi"
    },
    {
      id: "appleCherryVanilla",
      name: "Apple Cherry Vanilla"
    },
    {
      id: "panKachhiKeyriMint",
      name: "Pan Kacchi Keyri Mint"
    },
    {
      id: "watermelonSweetMelonMint",
      name: "Watermelon SweetMelon Mint"
    },
    {
      id: "zafranPanSpringwater",
      name: "Zafran Pan Springwater"
    },
    {
      id: "panAppleCherry",
      name: "Pan Apple Cherry"
    },
    {
      id: "kiwiBlueberryStrawberry",
      name: "Kiwi BlueBerry Strawaberry"
    },
    {
      id: "sweetmelonPanGrape",
      name: "Sweetmelon Pan Grape"
    },
    {
      id: "appleCherryMint",
      name: "PanPassionVanilla"
    }
  ],
  "RUSSIAN TWIST </br><p class='section_sub_heading'> Sheeha With LED Laser(99)</p>": [
    {
      id: "panorangepeachandgum",
      name: "Pan, Orange, Peach And Gum"
    },
    {
      id: "blueberrylemonrosepan",
      name: "Blueberry, Lemon, Rose, Pan"
    },
    {
      id: "applenightqueen",
      name: "Apple, Night-Queen"
    },
    {
      id: "magaipanzafran",
      name: "Mangai pan Zafran"
    },
    {
      id: "rtapplecherrymint",
      name: "Apple Cherry Mint"
    },
    {
      id: "pancardamommint",
      name: "Pan Cardamom Mint"
    },
    {
      id: "panclovecommissioner",
      name: "Pan Clove Commissioner"
    },
    {
      id: "applegrapeblueberry",
      name: "Apple Grape Blueberry"
    },
    {
      id: "berrygummint",
      name: "Berry Gum Mint"
    },
    {
      id: "Blueberrypanrose",
      name: "Blueberry Pan Rose"
    }
  ],
  "FLY SERIES</br><p class='section_sub_heading'>Sheesha Served With LED Laser AND Your Choice Of fresh juice(121)</p>": [
    {
      id: "mixofblueberries",
      name: "Mix Of Bluerries"
    },
    {
      id: "blackberryPanGrape",
      name: "Blackberry, Pan, Grape"
    },
    {
      id: "pangrapegum",
      name: "Pan,Grape,Gum"
    },
    {
      id: "panmagaizafran",
      name: "Pan,Magai,Zafran"
    },
    {
      id: "pineappleorangemint",
      name: "Pineapple, Orange,Mint"
    },
    {
      id: "pancappuccinovanilla",
      name: "Pan,Cappuccino,Vanilla"
    },
    {
      id: "coconutvanillapan",
      name: "Coconut,Vanilla,Pan"
    },
    {
      id: "passionmangopan",
      name: "Passion,Mango,Pan"
    },
    {
      id: "fsPankiwimint",
      name: "Pan,Kiwi,Mint"
    },
    {
      id: "pankiwicigar",
      name: "Pan,Kiwi,Cigar"
    }
  ],
  "BOOM EXOTIC </br> <p class='section_sub_heading'>Sheesha Served With Your Choice Of Appetizer + Fresh Juice + LED Laser(151)</p>": [
    {
      id: "bepanpassionvanilla",
      name: "Pan,Passion,Vanilla"
    },
    {
      id: "berrybummint",
      name: "Berry,Gum,Mint"
    },
    {
      id: "beorangevanillapan",
      name: "Orange,vanilla,Pan"
    },
    {
      id: "bepankiwimint",
      name: "Pan,Kiwi,Mint"
    },
    {
      id: "beGrapepineapplepan",
      name: "Grape,Pineapple,Pan"
    },
    {
      id: "bemangopeachpan",
      name: "Mango,Peach,Pan"
    },
    {
      id: "beapplecherryvanilla",
      name: "Apple,Cherry,Vanilla"
    },
    {
      id: "guavapanzafran",
      name: "Guava,Pan,Zafran"
    },
    {
      id: "springwaterpanzafran",
      name: "Spring Water,Pan,Zafran"
    }
  ],
  "ALLA BOOM SPECIAL </br><p class='section_sub_heading'> Live Sheesha Making + LED Laser & Pipe + Fruit Platter + 1 One Head Change(199)</p>": [
  ]
};

let appetizers = {
  "LAZZAT-E-ANGAR(Chiken)": [
    {
      id: "specialmurghtandoori",
      name: "SPECIAL MURGH TANDOORI",
      desc: "Whole chicken marinated in cashew, yoghurt,almond and herbs cooked in earth oven.",
      price: "18(H) 34(F)"
    },
    {
      id: "murghtikka",
      name: "MURGH TIKKA",
      desc: "All time favorite, chicken marinated in yoghurt & Indian spices, grilled in tandoor",
      price: "27"
    },
    {
      id: "tangdikulfikebab",
      name: "TANGDI KULFI KEBAB",
      desc: "Chef Kadar Khan special invention. Try it!",
      price: 32
    },
    {
      id: "murghkalimirchtikka",
      name: "MURGH KALIMIRCH TIKKA",
      desc: "Succulent cubes of chicken marinated in cream cheese, yoghurt and spices rolled in black cruched pepper; finished in clay oven.A must try!",
      price: 27
    },
    {
      id: "murghkesholay",
      name: "MURGH KE SHOLAY",
      desc: "Chef's specialty,enough said!",
      price: 32
    },
    {
      id: "murghpudeenakebab",
      name: "MURGH PUDEENA KEBAB",
      desc: "Checken pieces marinated in home made fresh mint chutny, yoghurt, spinach, Indian garam masala heavily cooked in tandoor.",
      price: 27
    },
    {
      id: "murghdahilassuni",
      name: "MURGH DAHI LASSUNI",
      desc: "Chicken pieces marinated in garlic, yoghurt,chilli, Indian spices deliciously grilled intandoor.",
      price: 27
    }
  ],
  "LAZZAT-E-ANGAR(Mutton)": [
    {
      id: "sikandarichaap",
      name: "SIKANDARI CHAP",
      desc: " Mutton chaap marinated in yoghurt, cream, cheese & roasted in tandoor.",
      price: 39
    },
    {
      id: "raanpeshawari",
      name: "RAAN PESHAWARI",
      desc: "Lamb whole leg marinated in special spices,malt vinegar and yoghurt; finished in an earthen pot.",
      price: "105(1kg)"
    },
    {
      id: "adrakichaap",
      name: "ADRAKI CHAAP",
      desc: "Rack of lamb steeped in ginger marinade and cooked to perfection",
      price: 39
    },
    {
      id: "lambbotikebab",
      name: "LAMBO BOTI KEBAB",
      desc: "Lamb chunks marinated in herbs and Indian spices.",
      price: 12
    },
    {
      id: "muttonnallibarrah",
      name: "MUTTON NALLI BARRAH",
      desc: "Chef's specialty.",
      price: 42
    }
  ],
  "LAZZAT-E-ANGAR(Fish)": [
    {
      id: "prawnsbuttrpeppergarlic",
      name: "PRAWNS BUTTER PEPPER GARLIC",
      desc: " Medium prawns marinated in chef's special spices.",
      price: 35
    },
    {
      id: "macchitikka",
      name: "MACCHI TIKKA",
      desc: "Fish chunks marinated in spices finished in an earthen oven.",
      price: 35
    },
    {
      id: "malaifish",
      name: "MALAI FISH",
      desc: "Chef specialty.",
      price: 38
    },
    {
      id: "ajwanijhinga",
      name: "AJWANI JHINGA",
      desc: "Jumbo barbeque prawns marinated in Indian spices, cardamom seeds and char grilled",
      price: 35
    },
    {
      id: "kalimirchtigerprawns",
      name: "KALI MIRCH TIGER PRAWNS",
      desc: "Tiger prawns marinated in yoghurt, chopped ginger & chilli; cooked in tandoor.",
      price: 45
    },
    {
      id: "lasooniprawns",
      name: "LASOONI PRAWNS",
      desc: "King prawns marinated in chopped garlic, yoghurt, cream and spices; cooked in tandoor",
      price: 35
    }
  ],
  "LAZZAT-E-ANGAR(Vegetarian)": [
    {
      id: "paneermanikpuritikka",
      name: "PANEER MANIKPURI TIKKA",
      desc: "Diced paneer tikka mixed with yoghurt, Indian spices & roasted in tandoor.",
      price: 30
    },
    {
      id: "paneerajwanitikka",
      name: "PANEER AJWANI TIKKA",
      desc: "Cottage cheese cubes marinated and topped with ajwain; grilled to perfection.",
      price: 30
    },
    {
      id: "aatishialoo",
      name: "AATISHI ALOO",
      desc: "Baby potatoes marinated in yoghurt & red chili paste.",
      price: 18
    },
    {
      id: "makaimalaiseekh",
      name: "MAKAI MALAI SEEKH",
      desc: "A combination of cottage cheese and Indian herbs coated with corn; grilled to perfection.",
      price: 18
    },
    {
      id: "kandharimushroom",
      name: "KANDHARI MUSHROOM",
      desc: "Fresh mushroom stuffed with chefs special masala.",
      price: 20
    },
  ],

  "SOUP": [
    {
      id: "tomatosoup(shorba)",
      name: "TOMATO SOUP(SHORBA)",
      price: 16
    },
    {
      id: "murghyakhni(shorba)",
      name: "MURGH YAKHNI(SHORBA)",
      price: 18
    }
  ],
};

let mainCourse = {
  "SHAHI DASTAR KHAWAN(chiken)":[
    {
      id: "murghkadaipeshwari",
      name: "MURGH KADAI PESHAWARI",
      desc: "Tender cubes of chicken cooked in mild spices with a mix of onion, tomato, and capsicum gravy garnished with coriander leaves",
      price: 35
    },
    {
      id: "murghmkhanwala",
      name: "MURGH MAKHANWALA",
      desc: "The infamous butter chicken. (PRO TIP: goes well with rumali roti).",
      price: 35
    },
    {
      id: "murghmatka",
      name: "MURGH MATKA",
      desc: "Whole spring chicken cooked exclusively in Chef Sajid Khan’s style. ",
      price: 35
    },
    {
      id: "murghlahori",
      name: "MURGH LAHORI",
      desc: "Pieces of chicken marinated and cooked in tomato and onion gravy with crushed black pepper.",
      price: 35
    },
    {
      id: "akbaritangdipeshawarigravy",
      name: "AKBARI TANGDI PESHAWARI GRAVY",
      desc: "Four drumsticks roasted in special peshawari gravy",
      price: 35
    },
    {
      id: "murghtikkamasala",
      name: "MURGH TIKKA MASALA",
      desc: "Again the all time favorite chicken tikka in traditional red gravy. Our is just a little unusual.",
      price: 35
    }
  ],
  "SHAHI DASTAR KHANWAN (Mutton)":[
    {
      id: "malaigosht",
      name: "MALAI GOSHT",
      desc: "Tender pieces of baby lamb cooked with milk cream and fine herbs.",
      price: 38
    },
    {
      id: "kashmiriroganjosh",
      name: "KASHMIRI ROGAN JOSH",
      desc: "Bone marrow marinated with ginger cooked in onion, tomato and yoghurt gravy.",
      price: 38
    },
    {
      id: "lahoribaltigosht",
      name: "LAHORI BLTI GOSHT",
      desc: "Boneless pieces of mutton in a perfect blend of tomato & onion based gravy with crushed black pepper.",
      price: 38
    },
    {
      id: "bhunagost",
      name: "BHUNA GOSHT",
      desc: "Tender cubes of mutton cooked togethertraditionally by our Chef’s aromatic herbs in almond based gravy",
      price: 38
    }
  ],
  "SHAHI DASTAR KHAWAN(Fish)": [
    {
      id: "prawanschatpatamasala",
      name: "PRAWANS CHATPATA MASHALA",
      desc: "Prawns marinated and cooked in garlic, greenchili, cumin, capsicum, crushed black pepper &spices.",
      price: 36
    },
    {
      id: "pomretgoancurry",
      name: "POMFRET GOAN CURRY ",
      desc: "Fresh whole pomfret cooked in chopped onion,tomato and coconut milk",
      price: 36
    },
    {
      id: "kadiprawns",
      name: "KADI PRAWNS",
      desc: "Semi-dry gravy",
      price: 36
    },
    {
      id: "rawasgaoncurry",
      name: "RAWAS GAON CURRY",
      desc: "Fresh Rawas cubes cooked in onion and tomato based gravy",
      price: 36
    }
  ],
  "SHAHI DASTAR KHAWAN(Vegetarian)": [
    {
      id: "paneermakhanwala",
      name: "PANEER MAKHANWALA",
      desc: "Cottage cheese in special home made gravy.",
      price: 24
    },
    {
      id: "paneerkadai",
      name: "PANEER KADAI",
      desc: "Semi-dry gravy",
      price: 24
    },
    {
      id: "paneertikkamasala",
      name: "PANEER TIKKA MASALA",
      desc: "Roasted paneer cooked in tomato & vegetable gravy; garnished with coriander.",
      price: 24
    },
    {
      id: "subzlazeez",
      name: "SUBZ LAZEEZ",
      desc: "Cottage cheese cauliflower, beans, peas,cabbage & capsicum cooked in a medley of onion and cashew nut gravy.",
      price: 20
    },
    {
      id: "paneerluabdaar",
      name: "PANEER LUABDAAR",
      desc: "Cottage cheese cubes cooked in tomato, onion and cashew nut gravy.",
      price: 24
    },
    {
      id: "veg jalfrezi",
      name: "VEG JALFREZI",
      desc: "Assorted vegetables cooked in kadai style.",
      price: 20
    }
  ],
  "SHAHI DAL":[
    {
      id: "daltadka",
      name: "DAL TADKA",
      desc: "Yellow lentil tempered with chilli, onion, garlic and spices.",
      price: 20
    },
    {
      id: "dalfry",
      name: "DAL FRY",
      desc: " Yellow dal cooked without tadka.",
      price: 20
    },
    {
      id: "dalmakhani",
      name: "DAL MAKHANI",
      desc: "Buttery, creamy & flavorful slow cooked black lentils.",
      price: 24
    }
  ],
  "BIRYANI DASTAR KHAWAN SE":[
    {
      id: "murgh dum biryani",
      name: "MURGH DUM BIRYANI",
      desc: "Flavoured chicken and rice combination perfectly spices sealed finished on dum",
      price: 25
    },
    {
      id: "kachchaygoshtkibirani",
      name: "KACHCHAY GOSHT KI BIRYANI",
      desc: "A classical combination of basmati rice, lamb meat on the bone with selected spices; dum cooked",
      price: 28
    },
    {
      id: "nallibiryani",
      name: "NALLI BIRYANI",
      desc: "Flavoured mutton nalli combination of basmati rice",
      price: 32
    },
    {
      id: "raanbiryani",
      name: "RAAN BIRYANI",
      desc: "Flavoured mutton leg and perfect rich combination of spices.",
      price: "129(F) 70(H)"
    },
    {
      id: "subzdumbiryani",
      name: "SUBZ DUM BIRYANI",
      desc: "Fresh assorted vegetable and rice cooked dum in an exotically flavoured vegetable stock.",
      price: 18
    },
    {
      id: "steam rice",
      name: "STEAM RICE",
      price: 10
    },
    {
      id: "jeerarice",
      name: "JEERA RICE",
      price: 12
    }
  ],

  "SHAHI ROTIYAN":[
    {
      id: "tandooriroti",
      name: "TANDOORI ROTI",
      price: 5
    },
    {
      id: "butterroti",
      name: "BUTTER ROTI",
      price: "7"
    },
    {
      id: "tandoorinaan",
      name: "TANDOORI NAAN",
      Price: 8
    },
    {
      id: "butterNaan",
      name: "BUTTER NAAN",
      price: 10
    },
    {
      id: "garlicnaan",
      name: "GARLIC NAAN",
      price: 10
    }
  ],

  "DESSERTS":[
    {
      id: "malaifirni",
      name: "MALAI FIRNI",
      price: 16
    }
  ],
  "QUICK FOOD":[
    {
      id: "SEMICRISPYCHICKEN",
      name: "SEMI CRISPY CHICKEN",
      price: 18
    },
    {
      id: "VEGFANTASIA",
      name: "VEG FANTASIA",
      price: 26
    },
    {
      id: "TANDOORIMEXICANWRAP",
      name: "TANDOORI MEXICAN WRAP",
      price: 20
    },
    {
      id: "ZINGERWRAP",
      name: "ZINGER WRAP",
      price: 25
    },
    {
      id: "SHEESHTAWOOKWRAP",
      name: "SHEESH TAWOOK WRAP",
      price: 20
    },
    {
      id: "SPECIALBEEFBURGERWITHCHEESE",
      name: "SPECIAL BEEF BURGER WITH CHEESE",
      price: 32
    },
    {
      id: "SPECIALZINGERBURGERWITH CHEESE",
      name: "SPECIAL ZINGER BURGER WITH CHEESE",
      price: 30
    },
    {
      id: "SPECIALZINGERDOUBLEBURGER",
      name: "SPECIAL ZINGER DOUBLE BURGER",
      price: 32
    },
    {
      id: "MASALARIES",
      name: "MASALA FRIES",
      price: 16
    },
    {
      id: "NORMALFRIES",
      name: "NORMAL FRIES",
      price: 14
    },
    {
      id: "HONEYCHILLIBEEF",
      name: "HONEY CHILLI BEEF",
      price: 28
    },
    {
      id: "CRISPYCHICKENWITHBOOMSAUCE",
      name: "CRISPY CHICKEN WITH BOOM SAUCE",
      price: 32
    },
    {
      id: "MOZARELLASTICKWITHCHEETOS",
      name: "MOZARELLA STICK WITH CHEETOS",
      price: 28
    },
    {
      id: "PENNEWHITEPASTACHICKEN",
      name: "PENNE WHITE PASTA CHICKEN",
      price: 38
    },
    {
      id: "PENNEPINKPASTAMUSHROOM",
      name: "PENNE PINK PASTA MUSHROOM",
      price: 36
    },
    {
      id: "CHICKENMOMOSTEAM",
      name: "CHICKEN MOMO STEAM",
      price: 22
    },
    {
      id: "CHICKENMOMOFRIED",
      name: "CHICKEN MOMO FRIED",
      price: 22
    }
  ],
  
  "FRESH JUICE":[
    {
      id: "ORANGE",
      name: "ORANGE",
      price: 22
    },
    {
      id: "MANGO",
      name: "MANGO",
      price: 22
    },
    {
      id: "PINEAPPLE",
      name: "PINEAPPLE",
      price: 22
    },
    {
      id: "GREENAPPLE",
      name: "GREEN APPLE",
      price: 22
    },
    {
      id: "WATERMELON",
      name: "WATERMELON",
      price: 22
    },
    {
      id: "AVOCADO",
      name: "ORANGE",
      price: 22
    },
    {
      id: "CARROT",
      name: "CARROT",
      price: 22
    },
    {
      id: "POMEGRANATE",
      name: "POMEGRANATE",
      price: 22
    },
    {
      id: "AALABOOMSSPECIAL",
      name: "AALA BOOM'S SPECIAL",
      price: 25
    },
  ],
  
  "MOCKTAILS":[
    {
      id: "PINACOLADA",
      name: "PINA COLADA",
      price: 24
    },
    {
      id: "MANGOPASSION",
      name: "MANGO PASSION",
      price: 24
    },
    {
      id: "CHERRYBERRY",
      name: "CHERRY BERRY",
      price: 24
    },
    {
      id: "ORANGEPASSIONFRUIT ",
      name: "ORANGE PASSION-FRUIT ",
      price: 24
    },
  ],

  "MOJITO":[
    {
      id: "CLASSICMOJITO",
      name: "CLASSIC MOJITO",
      price: 22
    },
    {
      id: "BLACKBERRY",
      name: "BLACKBERRY",
      price: 22
    },
    {
      id: "STRAWBERRY",
      name: "STRAWBERRY",
      price: 22
    },
    {
      id: "MANGO",
      name: "MANGO",
      price: 22
    },
    {
      id: "APPLE",
      name: "APPLE",
      price: 22
    },
    {
      id: "PINEAPPLE",
      name: "PINEAPPLE",
      price: 22
    },
    {
      id: "PASSIONFRUIT",
      name: "PASSION-FRUIT",
      price: 22
    },
  ],

  "MILKSHAKES":[
    {
      id: "oreo",
      name: "OREO",
      price: 25
    },
    {
      id: "NUTELLA",
      name: "NUTELLA",
      price: 25
    },
    {
      id: "STRAWBERRYa",
      name: "STRAWBERRY",
      price: 25
    },
    {
      id: "BANANAsd",
      name: "BANANA",
      price: 25
    },
    {
      id: "AVOCADO",
      name: "AVOCADO",
      price: 25
    },
    {
      id: "MANGOsd",
      name: "MANGO",
      price: 25
    },
    {
      id: "VANILLAs",
      name: "VANILLA",
      price: 25
    },
    {
      id: "KITKAT",
      name: "KITKAT",
      price: 25
    },
  ],

  "HOT TEA":[
    {
      id: "karaktea",
      name: "KARAK TEA",
      price: 10
    },
    {
      id: "BLACKTEA",
      name: "BLACK TEA",
      price: 10
    },
    {
      id: "GREENTEA",
      name: "GREEN TEA",
      price: 10
    },
    {
      id: "MORROCCANTEA",
      name: "MORROCCAN TEA",
      price: 10
    },
    {
      id: "GINGERLEMONTEA",
      name: "GINGER-LEMON TEA",
      price: 12
    },
    {
      id: "GINGERLEMONHONEYTEA",
      name: "GINGER-LEMON HONEY TEA",
      price: 15
    }
  ],
  "ICED TEA":[
    {
      id: "peachsd",
      name: "PEACH",
      price: 18
    },
    {
      id: "LEMONsds",
      name: "LEMON",
      price: 18
    },
    {
      id: "MANGOsadd",
      name: "MANGO",
      price: 18
    },
    {
      id: "PINEAPPLEsddw",
      name: "PINEAPPLE",
      price: 18
    },
    {
      id: "WATERMELONsdasd",
      name: "WATERMELON",
      price: 18
    },
    {
      id: "STRAWBERRYssr",
      name: "STRAWBERRY",
      price: 18
    },
    {
      id: "CLASSICer",
      name: "CLASSIC",
      price: 18
    }
  ],
  "COFFEE":[
    {
      id: "BLACKCOFFEE",
      name: "BLACK COFFEE",
      price: 10
    },
    {
      id: "CAPPUCCINO",
      name: "CAPPUCCINO",
      price: 18
    },
    {
      id: "LATTE",
      name: "LATTE",
      price: 18
    },
    {
      id: "AMERICANO",
      name: "AMERICANO",
      price: 18
    },
    {
      id: "MOCHAsdfsdf",
      name: "MOCHA",
      price: 18
    },
    {
      id: "HOTCHOCOLATE",
      name: "HOT CHOCOLATE",
      price: 15
    }
  ],

  "SOFT DRINKS":[
    {
      id: "pepsi",
      name: "PEPSI",
      price: 9
    },
    {
      id: "COCACOLA",
      name: "COCA COLA",
      price: 9
    },
    {
      id: "REDBULL",
      name: "RED BULL",
      price: 20
    },
    {
      id: "BARBICAN",
      name: "BARBICAN",
      price: 15
    },
    {
      id: "WATER",
      name: "WATER",
      price: 5
    }
  ],

  "GREEK DRINKS":[
    {
      id: "BERRYBASH",
      name: "BERRY BASH",
      price: 22
    },
    {
      id: "SWEETSTRAWBERRY",
      name: "SWEET STRAWBERRY",
      price: 22
    },
    {
      id: "MANGO22",
      name: "MANGO",
      price: 22
    },
    {
      id: "ORIGINAL",
      name: "ORIGINAL",
      price: 22
    },
  ]
};
