const uniqid = require('uniqid');

export const catalogue = {
    plants: {
      title: 'plants',
      items: 
      [
          {
              id: uniqid(),
              name: 'Assorted Succulent',
              price: 24.99,
              image: 'assorted-suc.jpg',
              description: 'Succulent plants, also known as succulents, are plants with parts that are thickened, fleshy, and engorged, usually to retain water in arid climates or soil conditions. The word succulent comes from the Latin word sucus, meaning \'juice\', or \'sap\'. A general definition of succulents is that they are drought resistant plants in which the leaves, stem, or roots have become more than usually fleshy by the development of water-storing tissue. All cactus are succulent, but not all succulents are cactus.',
              care: ['Direct', 'Bright', 'Every 2 weeks']
          },
          {
            id: uniqid(),
            name: 'Sunflower',
            price: 14.25,
            image: 'sunflower.jpg',
            description: 'Sunflowers (Helianthus annuus) say “summer” like no other plant. It is an annual plant with a large daisy-like flower face. They turn their flowers to follow the movement of the Sun across the sky east to west, and then returns at night to face the east, ready again for the morning sun.',
            care: ['Direct', 'Bright', 'Every 1 week']
        },{
            id: uniqid(),
            name: 'Anthurium Pink',
            price: 35.55,
            image: 'anthurium-pink.jpg',
            description: 'The Anthurium, also known as the Tail Flower, Flamingo Flower, Laceleaf and Anthurium Andraeanum, are the world’s longest blooming houseplant – blooms can last up to eight weeks, and new ones will pop up often. Generally found in the wild across the warmest parts of South America and the Caribbean, the anthurium is one of the most striking houseplants. The vivid red, yellow and other colours are not actually its flower, but a spathe - a brightly-coloured leaf! The actual flowers are tiny little things on the spike in the middle of the spathe.',
            care: ['Indirect', 'Medium', 'Every 1 week']
        },{
            id: uniqid(),
            name: 'Calathea Fasciata Borrusica',
            price: 35.99,
            image: 'calathea-fasciata-borrusica.jpg',
            description: 'Calathea Fasciata Borrusica is a close cousin to Calathea Orbifolia, which is also a gem amongst foliage plants. This hard to find Calathea has large rounded leaves with predominate rib pattern that is in the form of stripes, interchanging from dark to lighter green. Elegant and understated, this Calathea is prized for its round leaves which grow quite wide as the plant matures. The new leaves emerge beautifully from the center of the plant, which grows densely and can get rather large for Calathea - up to 2.5\' tall and wide, with leaves stretching over 8\".',
            care: ['Indirect', 'Low', 'Every 1 week']
        },{
            id: uniqid(),
            name: 'Philodendron Hope Selloum',
            price: 65,
            image: 'philodendron-hope-selloum.jpg',
            description: 'This incredible Philodendron, known as Hope Selloum, Lacy Tree, Horsehead, and Cut Leaf, makes a stunning, vibrant impact. Its impressively large serrated leaves are heart-shaped, medium green, and glossy with deep, wavy incisions along the edges. This jungle giant is not only beautiful, but also a very forgiving, adaptable, and low-maintenance houseplant. Originating from South America, it is “self-heading” meaning it does not creep or climb in a vine-like manner as some other philodendrons do. Meaning it will grow large and bushy rather than tall and vining. This plant also filters certain toxins from the air, improving the overall air quality in your home!',
            care: ['Indirect', 'Bright', 'Every 1 week']
        },
        {
            id: uniqid(),
            name: 'Philodendron Prince of Orange',
            price: 32.55,
            image: 'philodendron-prince-orange.jpg',
            description: 'Philodendron Prince of Orange (Philodendron x "Prince of Orange") is a philodendron hybrid that grows up to 2 feet tall. It is self-heading rather than vining, with the large leaves growing from a center base. The older leaves fall off, making way for new growth. "Prince of Orange" leaves start out a bright coppery orange color, changing to light green as they age.',
            care: ['Indirect', 'Low', 'Every 2 week']
        },
        {
            id: uniqid(),
            name: 'Oxalis',
            price: 23.55,
            image: 'oxalis.jpg',
            description: 'Native to the warm tropical climates of South America, the Oxalis is a perennial plant and has over 800 species! The Oxalis traiangularis \'Green/Francis\' is the one most commonly cultivated as a houseplant, followed by the tetraphylla \'Iron Cross\'. It is also known as a wood sorrel or a false shamrock, because of its trifoliate leaf shape. Oxalis do best in warm and sunny conditions. During the wintertime, most oxalis kept as houseplants will be through a semi-dormant phase if not receiving enough light. But come spring, they’ll bounce back in all their glory. Fun fact - they raise and lower their leaves from day to night as a part of their circadian rhythm!',
            care: ['Direct & Indirect', 'Low', 'Every 1-2 weeks']
        }
      ]
  },
  accessories: {
    title: 'accessories',
    items: 
    [
        {
            id: uniqid(),
            name: 'Garden Tool Set',
            price: 10,
            image: 'garden-tool-set.png',
            description: 'Keep your plants looking their best with our cute gardening toolset. This set is perfect for planting your new seeds, loosening soil, moving your pebbles and stones around your plants, cleaning, watering and transplanting your plants to new planters!',
        },
        {
            id: uniqid(),
            name: 'Washable Paper Hanging Basket',
            price: 16.99,
            description: 'Hand made with sustainable lightweight material, like fabric, they can be washed and reused over and over again, these paper hanging baskets are perfect for any trailing plants. Some dusts are expected from straps when new, will go away over time. Plants are not included.',
            image: 'hanging-basket.png',
        },
        {
            id: uniqid(),
            name: 'Washable Paper Planter Bag',
            price: 24.55,
            image: 'paper-bags.png',
            description: 'Hand made with sustainable lightweight material, these paper bags have been designed so that you can cuff and shape them to suit your needs. Like fabric, they can be washed and reused over and over again, just perfect for your plant babies.',
        },
    ]
  },
  gifts: {
    title: 'gifts',
    items: 
    [
        {
            id: uniqid(),
            name: 'Soft Enamel Pin',
            price: 12.99,
            image: 'soft-enamel.png',
            description: 'To check for ripeness, pat twice and listen for a nice, hollow echo.',
        },
        {
            id: uniqid(),
            name: 'Pink Princess Philodendron Keychain',
            price: 13,
            image: 'pink-princess-philodendron-keychain.jpg',
            description: 'This keychain is GOLD, FABULOUS, and UNIQUE! And you can literally bring your favourite plants everywhere you go!',
        },
        {
            id: uniqid(),
            name: 'Art Print',
            price: 25,
            image: 'art-print.jpg',
            description: 'Specifications\:\nSize: 8\" x 10\"\nMatte, thick, stock paper\nPackaged in a clear sleeve with a backing board for protection',
        },
        {
            id: uniqid(),
            name: 'Digital Gift Card',
            price: 50,
            image: 'digital-gift-card.jpg',
            description: 'Shopping for someone else but not sure what to give them? Give them the gift of choice with a digital gift card.\nWith this gift card, they can purchase anything online or in-person in our store.\nGift cards are delivered by email and contain instructions to redeem them at checkout.\nNo tax or additional processing fees. Non-refundable.',
        },
        {
            id: uniqid(),
            name: 'JOMO Logo Hat',
            price: 50,
            image: 'hat.jpg',
            description: 'Our favourite JOMO Logo Hat. This one\'s got a low profile with an adjustable strap and curved visor.\n• 100% chino cotton twill\n• Unstructured, 6-panel, low-profile\n• 3 ⅛” crown\n• Adjustable strap with antique buckle\n• Head circumference: 20 ½” - 21 ⅝”',
        }
    ]
  }
};