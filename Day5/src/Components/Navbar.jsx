import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <>
        <div id="navbar">
          <div id="nav1">
            <img
              src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div id="nav2">
            <div id="nav2-1">
              <img
                src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
                alt=""
                width="80%"
              />
            </div>
            <div id="nav2-2">
              <div id="searchbar">
                <div id="options">
                  {/* <label for="type">All Categories</label> */}
                  <select name="type" id="type">
                    <option value="">All Categories</option>
                    <option value="">--- Makeup</option>
                    <option value="">------ Face</option>
                    <option value="">------ Foundation</option>
                    <option value="">------ Blush</option>
                    <option value="">------ Highlighter</option>
                    <option value="">------ Face Primer</option>
                    <option value="">------ Makeup Remover</option>
                    <option value="">------ BB Cream</option>
                    <option value="">------ Loose Powder</option>
                    <option value="">------ Seting Spray</option>
                  </select>
                </div>
                <div id="input">
                  <input
                    type="text"
                    placeholder="Enter your Search ........."
                  />
                </div>
              </div>
              <div id="search">
                <img
                  src="https://delightful-duckanoo-17fff8.netlify.app/icons8-search-30.png"
                  alt=""
                  width="70%"
                  height="50%"
                />
              </div>
            </div>
            <div id="nav2-3">
              <div>
                <div id="witlist">
                  <img
                    src="https://logodix.com/logo/1332846.png"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div id="login">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QBaCgmJMTArP6E3KYOR6yN7LXXwXqCai5bGQqyCNyLEG_SapYTkGkDTmcVoDZXlQv-o&usqp=CAU"
                    alt=""
                    width="70%"
                    height="70%"
                  />
                </div>
                <div id="account">My Account</div>
              </div>
            </div>
          </div>
          <div id="nav3">
            <div id="items">
              <div id="makeup">
                <Link style={{ textDecoration: "none" }} to="/makeup" key="1">
                  <h3 className="hm" style={{ color: "whitesmoke" }}>
                    MAKEUP
                  </h3>
                </Link>
                <div id="makeupdropdown">
                  <div>
                    <div>
                      <b>FACE</b>
                      <p>BB Cream</p>
                      <p>Blush</p>
                      <p>Bronzer</p>
                      <p>CC Cream</p>
                      <p>Contour</p>
                      <p>Concealer</p>
                      <p>Compact &amp; Powder</p>
                      <p>Face Primer</p>
                      <p>Foundation</p>
                      <p>Highlighters</p>
                      <p>Loose Powder</p>
                      <p>Makeup Kits</p>
                      <p>Makeup Remover</p>
                      <p>Setting Spray</p>
                    </div>
                    <div>
                      <b>EYE</b>
                      <p>Contact Lenses</p>
                      <p>Eye Kit</p>
                      <p>Eyeliner</p>
                      <p>Eye Shadow</p>
                      <p>Eye Primer</p>
                      <p>Eye-Palettes</p>
                      <p>Eye Makeup Remover</p>
                      <p>Eye Brown Enhancers</p>
                      <p>Kajal</p>
                      <p>Mascara</p>
                      <p>Under-Eye Concealer</p>
                    </div>
                    <div>
                      <b>LIPS</b>
                      <p>Lipstick</p>
                      <p>Liquid Lipstick</p>
                      <p>Lip Liner</p>
                      <p>Lip Gloss</p>
                      <p>Lip Balm</p>
                      <p>Lip Crayon</p>
                      <p>Stain</p>
                      <p>Lip Plumper</p>
                    </div>
                    <div>
                      <b>NAILS</b>
                      <p>Manicure &amp; Pedicure Kits</p>
                      <p>Nail Polish</p>
                      <p>Nail Care</p>
                      <p>Nail Polish Sets</p>
                      <p>Nail Art Kits</p>
                      <p>Nail Polish Remover</p>
                    </div>
                    <div>
                      <b>TOOLS BRUSHES</b>
                      <p>Blush Brush</p>
                      <p>Eyelash Curlers</p>
                      <p>Eye Brush</p>
                      <p>Face Brush</p>
                      <p>Lip Brush</p>
                      <p>Makeup Pouches</p>
                      <p>Mirrors</p>
                      <p>Sponges &amp; Applicators</p>
                      <p>Sharpeners</p>
                      <p>Tweezers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link style={{ textDecoration: "none" }} to="/skin" key="2">
                  <h3 style={{ color: "whitesmoke" }}>SKIN</h3>
                </Link>

                <div id="skindropdown">
                  <div>
                    <div>
                      <b>EYE CARE</b>
                      <p>Dark Circles</p>
                      <p>Eye Contour Care</p>
                      <p>Eye Cream</p>
                      <p>Eye Mask</p>
                      <p>Eye Serums</p>
                      <p>Puffiness</p>
                      <p>Under Eye Cream</p>
                      <p>Under Eye Wrinkles</p>
                    </div>
                    <div>
                      <b>FACE CARE</b>
                      <p>Anti- Ageing Creams</p>
                      <p>Bleach Cream</p>
                      <p>Brightening cream</p>
                      <p>Face Wash</p>
                      <p>Facial Wipes</p>
                      <p>Face Oil</p>
                      <p>Face Cleansers</p>
                      <p>Facial Kits</p>
                      <p>Facial Tools</p>
                      <p>Moisturizer</p>
                      <p>Mask &amp; Peels</p>
                      <p>Serum</p>
                      <p>Toner &amp; Astringents</p>
                    </div>
                    <div>
                      <b>BODY CARE</b>
                      <p>All Cream</p>
                      <p>Body Moisturizers</p>
                      <p>Body Toners</p>
                      <p>Body Sun Care</p>
                      <p>Brightening Lotion</p>
                      <p>Dark Circles &amp; Wrinkles</p>
                      <p>Day Cream</p>
                      <p>Foot Cream</p>
                      <p>Hair Remover Cream</p>
                      <p>Hand Creams</p>
                      <p>Hands &amp; Feet</p>
                      <p>Kits &amp; Combos</p>
                      <p>Night Cream</p>
                      <p>Neck Creams</p>
                    </div>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                        alt=""
                        width="90%"
                        height="90%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link style={{ textDecoration: "none" }} to="/hair" key="3">
                  <h3 style={{ color: "whitesmoke" }}>HAIR</h3>
                </Link>
                <div id="hairdropdown">
                  <div>
                    <div>
                      <b>HAIR CARE</b>
                      <p>Color Protection</p>
                      <p>Dandruff</p>
                      <p>Dry Shampoo</p>
                      <p>Gels &amp; Waxes</p>
                      <p>Hair Spray</p>
                      <p>Hair Color/Dye</p>
                      <p>Hair Creams &amp; Masks</p>
                      <p>Hair Styling</p>
                      <p>Hairfall &amp; Thinning</p>
                      <p>Straighteners</p>
                    </div>
                    <div>
                      <b>HAIR LOSS</b>
                      <p>Conditioner</p>
                      <p>Hair Oil</p>
                      <p>Hair Serum</p>
                      <p>Hair Growth Soluctions</p>
                      <p>Shampoo</p>
                    </div>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/personal-care"
                  key="4"
                >
                  <h3 style={{ color: "whitesmoke" }}>PERSONAL CARE</h3>
                </Link>
                <div id="personalcaredropdown">
                  <div>
                    <div>
                      <b>BATH &amp; BODY</b>
                      <p>Body Cleansers</p>
                      <p>Body Wash</p>
                      <p>Creams</p>
                      <p>Essentials Oils</p>
                      <p>Foot Cream</p>
                      <p>Scrubs &amp; Exfoliants</p>
                      <p>Ubtan &amp; Face Packs</p>
                    </div>
                    <div>
                      <b>BATHING ACCESSORIES</b>
                      <p>Bath Brushes</p>
                      <p>Loofahs</p>
                      <p>Shower Caps</p>
                      <p>Sponges</p>
                    </div>
                    <div>
                      <b>BATH &amp; SHOWER</b>
                      <p>Body Soaps</p>
                      <p>Shower Gel</p>
                    </div>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                        alt=""
                        width="90%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ color: "whitesmoke" }}>MOM &amp; BABY CARE</h3>
                <div id="momdropdown">
                  <div>
                    <div>
                      <b>BABY CARE</b>
                      <p>Bath Time</p>
                      <p>Diapers</p>
                      <p>Lotions &amp; Creams</p>
                      <p>Oils</p>
                      <p>Powder</p>
                      <p>Shampoo</p>
                      <p>Soaps</p>
                      <p>Sterilizer &amp; Cleaners</p>
                      <p>Rash Cream</p>
                      <p>Wipes</p>
                    </div>
                    <div>
                      <b>MOM CARE </b>
                      <p>Lotions &amp; Creams</p>
                      <p>Personal Care</p>
                    </div>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ color: "whitesmoke" }}>FRAGRANCE</h3>
                <div id="fragrancedropdown">
                  <div>
                    <div>
                      <p>Perfumes</p>
                      <p>Deodorants roll ons</p>
                      <p>Body Mist/Spray</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ color: "whitesmoke" }}>AYURVEDA</h3>
                <div id="ayurvedadropdown">
                  <div>
                    <div>
                      <b>NATURAL SKIN CARE</b>
                      <p>Body Wash</p>
                      <p>Body Lotion</p>
                      <p>Cleansers</p>
                      <p>Cream</p>
                      <p>Eye Care</p>
                      <p>Face Wash</p>
                      <p>Gel</p>
                      <p>Lip Care</p>
                      <p>Mask</p>
                      <p>Pack</p>
                      <p>Scrub</p>
                      <p>Sun Protection</p>
                    </div>
                    <div>
                      <b>NATURAL HAIR CARE</b>
                      <p>Conditioner</p>
                      <p>Hair Oils</p>
                      <p>Hair Serum</p>
                      <p>Hair Gel</p>
                      <p>Shampoo</p>
                    </div>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ color: "whitesmoke" }}>BRANDS</h3>
              </div>
            </div>
            <div id="cart">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt=""
                width="50&"
                height="65%"
              />
              <h3>MY CART - 00.00</h3>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
