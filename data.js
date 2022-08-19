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
  "BOOM EXOTIC </br> <p class='section_sub_heading'>Sheesha Served With Your Choice Of Appetizer + Fresh Juice + LED Laser(151)</p>":[
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
  "ALLA BOOM SPECIAL </br><p class='section_sub_heading'> Live Sheesha Making + LED Laser & Pipe + Fruit Platter + 1 One Head Change(199)</p>":[
  ]
};
