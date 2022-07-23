import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
export default function Makeupproducts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData([]);
    fetch(
      // `http://localhost:8080/products?_page=${page}&_limit=4?_sort={price1}`
      `https://sumitfirstapi.herokuapp.com/products?_page=${page}&_limit=4?_sort={price1}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      });
  }, [page]);
  useEffect(() => {
    setHigh(false);
    setData([]);
    setLoading(true);
    fetch(
      // "http://localhost:8080/products?_sort=price1"
      "https://sumitfirstapi.herokuapp.com/products?_sort=price1"
    )
      .then((res) => res.json())

      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, [high]);
  useEffect(() => {
    setLow(false);
    setData([]);
    setLoading(true);
    fetch(
      // "http://localhost:8080/products?_sort=price1&_order=desc"
      "https://sumitfirstapi.herokuapp.com/products?_sort=price1&_order=desc"
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, [low]);

  return (
    <>
      <Navbar />
      <div className="sorting">
        <button disabled={high === true} onClick={() => setHigh(true)}>
          Price : Low To High
        </button>
        <button onClick={() => setLow(true)}>Price : High To Low</button>
      </div>
      <div className="mp">
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
        <button disabled={page === 3} onClick={() => setPage(3)}>
          3
        </button>
      </div>
      {/* {loading && <h1>LOADING.....</h1>} */}

      <div className="makeupproduct">
        {loading && (
          <img
            src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif"
            style={{ marginLeft: "500px" }}
          />
        )}

        {data.map((ele) => (
          <div className="inerproduct">
            <img className="productimage" src={ele.img} alt="na" />
            <p>{ele.heading}</p>
            <p>⭐⭐⭐⭐⭐(1)</p>
            <div>
              <h3 className="originalprice">₹{ele.price}</h3>
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
