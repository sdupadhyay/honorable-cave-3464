import Navbar from "./Navbar";
import Body from "./Body";
import Newarrivals from "./Newarrivals";
import Newitems from "./Newitems";
export default function Homepage() {
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
  return (
    <>
      <Navbar />
      <Body />
      <Newarrivals />
      <div style={{ display: "flex", width: "93%", margin: "auto" }}>
        {data.map((ele) => (
          <Newitems
            img={ele.img}
            heading={ele.heading}
            price={ele.price}
            price1={ele.price1}
            d={ele.d}
          />
        ))}
      </div>
    </>
  );
}
