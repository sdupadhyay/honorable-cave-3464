let image_data = [
  "https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg",
  "https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg",
  "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg",
];
let i = 0;
let slide = document.getElementById("slideshow");
setInterval(() => {
  if (i >= image_data.length) {
    i = 0;
  }
  slide.innerHTML = null;
  let img = document.createElement("img");
  img.src = image_data[i];
  slide.append(img);
  i++;
}, 5000);
let data = [
  {
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/c/4ca14ce8906087779124_7_.jpg",
    heading: "Mamaearth Rice Face Scrub For Glowing With Rice Water",
    price: "350",
    price1: "304",
    d: "13% off",
  },
  {
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
    heading: "Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",
    price: "475",
    price1: "428",
    d: "10% off",
  },
  {
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",
    heading: "WOW Skin Caffeine Face Serum with Carcoal and Lemon",
    price: "599",
    price1: "515",
    d: "14% off",
  },
  {
    img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg",
    heading: "Mamaearth Flowers of Youth Essence Serum With Hyaluronic Acid",
    price: "699",
    price1: "599",
    d: "10% off",
  },
];
data.forEach((ele) => {
  let box = document.createElement("div");
  box.setAttribute("id", "nbox");
  let image = document.createElement("img");
  image.setAttribute("class", "productimage");
  image.src = ele.img;
  let he = document.createElement("p");
  he.innerText = ele.heading;
  let rating = document.createElement("p");
  rating.innerText = "⭐⭐⭐⭐⭐(1)";
  let box1 = document.createElement("div");
  let pr = document.createElement("h3");
  pr.setAttribute("class", "originalprice");
  pr.innerText = `₹${ele.price}`;
  let pri = document.createElement("h3");
  pri.setAttribute("class", "offerprice");
  pri.innerText = `₹${ele.price1}`;
  let disc = document.createElement("h3");
  disc.setAttribute("class", "discount");
  disc.innerText = ele.d;
  let add = document.createElement("button");
  add.setAttribute("class", "addtocart");
  add.innerText = "Add To Cart";
  let witlist = document.createElement("button");
  witlist.setAttribute("class", "witlist");
  witlist.innerText = "🤍";
  box1.append(pr, pri, disc);
  box.append(image, he, rating, box1, add, witlist);
  document.getElementById("pdata").append(box);
});
