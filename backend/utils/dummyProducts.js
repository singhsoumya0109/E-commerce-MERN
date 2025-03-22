import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Product categories with multiple name, description, image, and price options
const productData = {
  watches: [
    {
      names: [
        "Smart Watch",
        "Analog Watch",
        "Digital Sports Watch",
        "Luxury Gold Watch",
        "Minimalist Watch",
        "Chronograph Watch",
        "Pilot Watch",
        "Tactical Watch",
        "Solar Powered Watch",
        "Diver's Watch",
      ],
      descriptions: [
        "Feature-packed smartwatch with health tracking.",
        "Classic analog watch with leather strap.",
        "Sports watch with stopwatch functionality.",
        "Luxury gold watch for premium styling.",
        "Minimalist watch with a sleek design.",
        "Chronograph watch with multiple dials.",
        "Pilot watch inspired by aviation instruments.",
        "Rugged tactical watch for adventure lovers.",
        "Eco-friendly solar-powered watch.",
        "Diver’s watch with waterproof technology.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/61ei8r7kJEL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/81jVNXMKhEL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71rjlGEi+1L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71aJJQtVnoL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/61LO6l4zB4L._AC_UL320_.jpg",
      ],
      priceRange: [500, 10000],
      category: "watches",
    },
  ],
  jackets: [
    {
      names: [
        "Leather Jacket",
        "Denim Jacket",
        "Bomber Jacket",
        "Varsity Jacket",
        "Motorcycle Jacket",
        "Puffer Jacket",
        "Windbreaker",
        "Trench Coat",
        "Fleece Jacket",
        "Blazer Jacket",
      ],
      descriptions: [
        "Stylish and durable leather jacket.",
        "Classic denim jacket for all seasons.",
        "Trendy bomber jacket with a comfortable fit.",
        "Iconic varsity jacket with striped cuffs.",
        "Rugged motorcycle jacket with reinforced padding.",
        "Lightweight puffer jacket for winter warmth.",
        "Waterproof windbreaker for outdoor activities.",
        "Elegant trench coat for formal looks.",
        "Cozy fleece jacket with soft fabric.",
        "Tailored blazer jacket for a sharp appearance.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/61Q0xlCF8zL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/41-Bi9pBzyL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/61pCn6DowvS._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/51XWUBbfe7L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71XFaD9DrxL._AC_UL320_.jpg",
      ],
      priceRange: [1000, 10000],
      category: "jackets",
    },
  ],
  hoodies: [
    {
      names: [
        "Pullover Hoodie",
        "Zip-Up Hoodie",
        "Oversized Hoodie",
        "Graphic Hoodie",
        "Fleece Hoodie",
      ],
      descriptions: [
        "Classic pullover hoodie for casual comfort.",
        "Stylish zip-up hoodie with a modern fit.",
        "Oversized hoodie for a relaxed streetwear look.",
        "Trendy graphic hoodie with unique prints.",
        "Warm fleece hoodie for chilly weather.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/61mbdcV3ckL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/41oxHlqVLXL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/61p8oJbwk4L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/51o8E3MmYYL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/61pztWYvWbL._AC_UL320_.jpg",
      ],
      priceRange: [800, 5000],
      category: "hoodies",
    },
  ],

  jeans: [
    {
      names: [
        "Slim Fit Jeans",
        "Regular Fit Jeans",
        "Distressed Jeans",
        "Bootcut Jeans",
        "Straight Leg Jeans",
        "Tapered Jeans",
        "High-Waisted Jeans",
        "Stretchable Jeans",
        "Vintage Wash Jeans",
        "Acid Wash Jeans",
      ],
      descriptions: [
        "Trendy slim fit jeans with stretchable fabric.",
        "Comfortable regular fit jeans for daily wear.",
        "Ripped distressed jeans for a rugged look.",
        "Bootcut jeans with a relaxed fit.",
        "Straight leg jeans with classic styling.",
        "Tapered jeans for a modern touch.",
        "High-waisted jeans for a retro vibe.",
        "Ultra-soft stretchable jeans for all-day comfort.",
        "Vintage wash jeans with a unique faded look.",
        "Acid wash jeans for a bold fashion statement.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/61EITRMkVTL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71IOeN+4G7L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/413FPmlpB7L._AC_UL320_.jpg",
      ],
      priceRange: [800, 5000],
      category: "jeans",
    },
  ],
  shoes: [
    {
      names: [
        "Running Shoes",
        "Casual Sneakers",
        "Basketball Shoes",
        "Hiking Boots",
        "Loafers",
        "Formal Dress Shoes",
        "Slip-On Shoes",
        "High-Top Sneakers",
        "Athletic Trainers",
        "Canvas Shoes",
      ],
      descriptions: [
        "Lightweight and breathable running shoes.",
        "Stylish casual sneakers for daily wear.",
        "Durable basketball shoes with superior grip.",
        "Hiking boots designed for rugged trails.",
        "Classic loafers with a comfortable fit.",
        "Elegant formal dress shoes for business attire.",
        "Easy slip-on shoes for quick wear.",
        "Trendy high-top sneakers for street style.",
        "Athletic trainers with shock absorption.",
        "Classic canvas shoes for a laid-back look.",
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAaVzE_SqbsIeayYeLG_FllBu5eOomqpMvg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac3ZdJ8aUOaEnsec0w-qiYGass_Hb9sPGaQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac3ZdJ8aUOaEnsec0w-qiYGass_Hb9sPGaQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaRZTp8s6jGQ7dQWvOKHSGliaRzdI8_mB5g&s",
      ],
      priceRange: [500, 5000],
      category: "shoes",
    },
  ],
  // Additional Categories
  tshirts: [
    {
      names: [
        "Graphic T-Shirt",
        "Plain Cotton Tee",
        "V-Neck T-Shirt",
        "Polo Shirt",
        "Oversized T-Shirt",
      ],
      descriptions: [
        "Cool and trendy graphic printed t-shirt.",
        "Classic plain cotton tee for daily wear.",
        "Stylish V-neck t-shirt with a modern fit.",
        "Elegant polo shirt for casual and formal wear.",
        "Oversized t-shirt for a comfortable look.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/717-NN8T+3L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71MJi7CAZXL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71LLwVdmsfL._AC_UL320_.jpg",
      ],
      priceRange: [300, 2000],
      category: "t-shirts",
    },
  ],
  glasses: [
    {
      names: [
        "Sunglasses",
        "Blue Light Glasses",
        "Aviator Glasses",
        "Round Frame Glasses",
      ],
      descriptions: [
        "Stylish sunglasses with UV protection.",
        "Protect your eyes with blue light glasses.",
        "Classic aviator glasses for a stylish look.",
        "Round frame glasses for a vintage touch.",
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYOl0jA4YP07J-BrzW1-Ye9Aau3blMl9v3w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1hEenpT2c_GjjKcASJAQ_qxS-jUOTYh52A&s",
        "https://img.freepik.com/premium-photo/vertical-portrait-handsome-africanamerican-man-wearing-sunglasses-while-posing-against-yellow-bac_236854-33915.jpg",
        "https://media.istockphoto.com/id/1207472153/photo/african-american-woman-in-jacket-with-hands-in-pockets-looking-at-camera-isolated-on-turquoise.jpg?s=612x612&w=0&k=20&c=_qp_Bna-Ek8b9jSPi-B2DnkYJRggo-X3rA_wgziL3VU=",
        "https://i.pinimg.com/474x/58/bb/30/58bb30ab6b7ad03459dd2c61bbd7e87b.jpg",
      ],
      priceRange: [500, 3000],
      category: "glasses",
    },
  ],
  suits: [
    {
      names: ["Business Suit", "Tuxedo", "Casual Blazer", "Slim Fit Suit"],
      descriptions: [
        "Elegant business suit for formal occasions.",
        "Premium tuxedo for special events.",
        "Casual blazer for a smart-casual look.",
        "Slim fit suit for a sharp appearance.",
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfNV_3AQMDcYt_XLCAlMJnOn72NynisGGVQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfct20ccepIkak1l6yRCatUD1nY61VGjaGdQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzhBxuBs1XrF1pqMd_Ts9K_iN1IniK_r9DQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzhBxuBs1XrF1pqMd_Ts9K_iN1IniK_r9DQ&s",
      ],
      priceRange: [2000, 15000],
      category: "suits",
    },
  ],
  bags: [
    {
      names: ["Backpack", "Leather Handbag", "Messenger Bag", "Travel Duffel"],
      descriptions: [
        "Spacious backpack for daily essentials.",
        "Premium leather handbag with a modern touch.",
        "Messenger bag for work and travel.",
        "Durable travel duffel for long trips.",
      ],
      images: [
        "https://m.media-amazon.com/images/I/71MrwhiC0UL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/81qnOn4lq3L._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/81D7Ahk9ByL._AC_UL640_QL65_.jpg",
      ],
      priceRange: [1000, 8000],
      category: "bags",
    },
  ],
};

// Function to get a random item from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to get a random price within a range
const getRandomPrice = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {});

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products

    const products = [];
    for (let i = 0; i < 100; i++) {
      const category = getRandomItem(Object.keys(productData));
      const product = getRandomItem(productData[category]);

      products.push({
        name: getRandomItem(product.names),
        description: getRandomItem(product.descriptions),
        price: getRandomPrice(...product.priceRange),
        image: getRandomItem(product.images),
        category: product.category,
        reviews: [],
        averageRating: 0, 
      });
    }

    await Product.insertMany(products);
    console.log("100 products added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding products:", error);
    mongoose.connection.close();
  }
};

seedProducts();
