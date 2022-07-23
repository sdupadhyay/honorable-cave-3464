import "./Body.css";
export default function Newitems({ img, heading, price, price1, d }) {
  return (
    <>
      {/* <div id="pdata"> */}
      <div id="nbox">
        <img className="productimage" src={img} alt="na" />
        <p>{heading}</p>
        <p>⭐⭐⭐⭐⭐(1)</p>
        <div>
          <h3 className="originalprice"> ₹{price}</h3>
          <h3 className="offerprice"> ₹{price1}</h3>
          <h3 className="discount">{d}</h3>
        </div>
        <button className="addtocart">Add To Cart</button>
        <button className="witlist">🤍</button>
      </div>
      {/* </div> */}
    </>
  );
}
