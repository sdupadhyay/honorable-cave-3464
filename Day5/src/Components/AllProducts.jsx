import { useEffect } from "react";
import { useState } from "react";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("makeup");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setData([]);
    fetch(
      // `http://localhost:8080/${text}`
      `https://sumitfirstapi.herokuapp.com/${text}`
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, [text]);
  return (
    <>
      <div className="allproducts">
        <button disabled={text === "makeup"} onClick={() => setText("makeup")}>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Makeup</div>
        </button>
        <button disabled={text === "skin"} onClick={() => setText("skin")}>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Skin</div>
        </button>
        <button disabled={text === "hair"} onClick={() => setText("hair")}>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Hair</div>
        </button>
        <button
          disabled={text === "personalcare"}
          onClick={() => setText("personalcare")}
        >
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Personal Care</div>
        </button>
        <button disabled={text === "mom"} onClick={() => setText("mom")}>
          {" "}
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Mom & Baby Care</div>
        </button>
        <button disabled={text === "eye"} onClick={() => setText("eye")}>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Eye</div>
        </button>
        <button
          disabled={text === "fragrance"}
          onClick={() => setText("fragrance")}
        >
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
              alt=""
            />
          </div>
          <div>Fragrance</div>
        </button>
      </div>
      <div className="particularproduct">
        {loading && (
          <img
            src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif"
            style={{ marginLeft: "400px" }}
          />
        )}
        {data.map((ele) => (
          <div id="nbox">
            <img className="productimage" src={ele.img} alt="na" />
            <p>{ele.heading}</p>
            <p>⭐⭐⭐⭐⭐(1)</p>
            <div>
              <h3 className="originalprice"> ₹{ele.price}</h3>
              <h3 className="offerprice">₹{ele.price1}</h3>
              <h3 className="discount">{ele.d}</h3>
            </div>
            <button className="addtocart">Add To Cart</button>
            <button className="witlist">🤍</button>
          </div>
        ))}
      </div>
    </>
  );
}
