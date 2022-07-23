import { useState } from "react";
import { useEffect } from "react";

export default function Makeupproducts() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:8080/products")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setData(res);
  //       });
  //   }, []);
  return (
    <>
      {/* {data.map((ele) => (
        <div className="inerproduct">
          <img className="productimage" src={ele.img} alt="na" />
          <p>{ele.heading}</p>
          <p>⭐⭐⭐⭐⭐(1)</p>
          <div>
            <h3 className="originalprice">{ele.price}</h3>
            <h3 className="offerprice">{ele.price1}</h3>
            <h3 className="discount">{ele.d}</h3>
          </div>
          <button className="addtocart">Add To Cart</button>
          <button className="witlist">🤍</button>
        </div>
      ))} */}
    </>
  );
}
