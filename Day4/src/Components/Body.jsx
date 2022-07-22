import { useState } from "react";
import "./Body.css";
export default function Body() {
  let image_data = [
    "https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg",
  ];
  const [change, setChange] = useState(0);
  setInterval(() => {
    setChange(change + 1);
    if (change >= image_data.length - 1) {
      setChange(0);
    }
  }, 3000);
  return (
    <>
      <>
        <div id="body">
          <div id="type1">
            <div>
              <div id="ci">
                <img
                  src="https://th.bing.com/th/id/OIP.iqNs1IG90Ed_38iEVPyWHAHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                  width="100%"
                />
              </div>
              <div id="n">
                <b>ALL CATEGORIES</b>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Makeup</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Skin</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Hair</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Personal Care</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Mom and Baby Care</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/fragrance.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Fragrance</p>
              </div>
            </div>
            <div>
              <div id="ci">
                <img
                  src="https://www.beautybebo.com/pub/media/ayurveda.png"
                  alt=""
                />
              </div>
              <div id="n">
                <p style={{ margin: 0 }}>Ayurveda</p>
              </div>
            </div>
          </div>
          <div id="slideshow">
            <img src={image_data[change]} alt="" />
          </div>
        </div>
        <div id="offer">
          <img
            src="https://www.beautybebo.com/pub/media/blue_heaven.jpg"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </>
    </>
  );
}
