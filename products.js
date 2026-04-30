// products.js — Static product catalog data
const PRODUCTS = [
  {
    id: 1,
    name: "Old Skool Port Royale Sneakers",
    price: 1499,
    category: "Men",
    tag: "Men",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    sizes: [7, 8, 9, 10],
    description: "Old Skool Port Royale Sneakers."
  },
  {
    id: 2,
    name: "Old Skool Green-White Sneakers",
    price: 1999,
    category: "Men",
    tag: "Men",
    image: "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHNob2VzfGVufDB8fDB8fHww",
    sizes: [7, 8, 9, 10],
    description: "Old Skool Green-White Sneakers."
  },
  {
    id: 3,
    name: "white Low-Top sneakers",
    price: 1799,
    category: "Men",
    tag: "Men",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8fDB8fHww",
    sizes: [7, 8, 9, 10],
    description: "white Low-Top sneakers."
  },
  {
    id: 4,
    name: "Beige White Sneakers",
    price: 2199,
    category: "Men",
    tag: "Men",
    image: "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNob2VzfGVufDB8fDB8fHww",
    sizes: [7, 8, 9, 10],
    description: "Beige White Sneakers."
  },
  {
    id: 5,
    name: "Girls High Heels",
    price: 1299,
    category: "Women",
    tag: "Women",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    sizes: [7, 8, 9, 10],
    description: "Girls High Heels."
  },
  {
    id: 6,
    name: "Metallic gold Punjabi Jutti",
    price: 1499,
    category: "Women",
    tag: "Women",
    image: "https://images.unsplash.com/photo-1534653299134-96a171b61581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    sizes: [7, 8, 9, 10],
    description: "Metallic Gold Punjabi Jutti."
  },
  {
    id: 7,
    name: "Nude Solid Boots",
    price: 1999,
    category: "Women",
    tag: "Women",
    image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
    sizes: [7, 8, 9, 10],
    description: "Nude Solid Boots."
  },
  {
    id: 8,
    name: "Multicolored Strappy Heeled Sandals",
    price: 1899,
    category: "Women",
    tag: "Women",
    image: "https://images.unsplash.com/photo-1670938258821-2956d4ce9c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
    sizes: [7, 8, 9, 10],
    description: "Multicolored Strappy Heeled Sandals."
  },
  {
    id: 9,
    name: "White Ankle Socks",
    price: 599,
    category: "Accessories",
    tag: "Accessories",
    image: "https://images.unsplash.com/photo-1631180543602-727e1197619d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29ja3N8ZW58MHx8MHx8fDA%3D",
    sizes: ["One Size"],
    description: "White Ankle Socks."
  },
  {
    id: 10,
    name: "Ankle Length Socks",
    price: 599,
    category: "Accessories",
    tag: "Accessories",
    image: "https://images.unsplash.com/photo-1597843797221-e34b4a320b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvY2tzfGVufDB8fDB8fHww",
    sizes: ["One Size"],
    description: "Ankle Length Socks."
  },
  {
    id: 11,
    name: "Beige Ankle Length Socks",
    price: 499,
    category: "Accessories",
    tag: "Accessories",
    image: "https://images.unsplash.com/photo-1641482847237-e64ca2769a8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvY2tzfGVufDB8fDB8fHww",
    sizes: ["One Size"],
    description: "Beige Ankle Length Socks."
  },
  {
    id: 12,
    name: "Chrismas Theme Ankle Length Socks",
    price: 599,
    category: "Accessories",
    tag: "Accessories",
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2tzfGVufDB8fDB8fHww",
    sizes: ["One Size"],
    description: "Chrismas Theme Ankle Length Socks."
  },
  {
    id: 13,
    name: "Chelsea Boots For Men",
    price: 2499,
    category: "Men",
    tag: "Men",
    image: "https://plus.unsplash.com/premium_photo-1670983858132-c2f3c4dbf08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHNob2VzfGVufDB8fDB8fHww",
    sizes: [7, 8, 9, 10],
    description: "Chelsea Boots For Men."
  },
  {
    id: 14,
    name: "Leather Shoes For Men",
    price: 2699,
    category: "Men",
    tag: "Men",
    image: "https://images.unsplash.com/photo-1603191659812-ee978eeeef76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    sizes: [7, 8, 9, 10],
    description: "leather Shoes For Men."
  }
];
