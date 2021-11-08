import React from "react";
import "./saloon.css";
import Subs from "../subscription/subs";
import Shopping from "../shopping/shopping";


const Saloon = () => {
  return (
    <>
      <div className="main-1">
        <div className="main-2">
          <h2 className="main-3">Saloon</h2>
          <div id="salon-main">
            <div className="cont-main">
              <img
                className="big-img"
                src="data:image/png;base64,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"
                alt="img"
              />
              <>
                {/* <div className="venue"> */}
                <div className="ven">
                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://static.dezeen.com/uploads/2018/11/lords-cricket-ground-wilkinson-eyre_dezeen_2364_col_2-852x401.jpg"
                      alt="Lord's"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">Sparkle & shine</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">Monthly Essential Package</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">All Organic Package</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">All in Dhamaka Package</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">Facial & clean-ups</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">Waxing</h5>
                    </div>
                  </div>

                  <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/Edgbaston.jpg"
                      alt="Edgbaston"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5 className="spa">Body Spa</h5>
                    </div>
                  </div>

                  {/* <div className="cards">
                    <img
                      className="stadium"
                      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/12/The-Oval.jpg"
                      alt="Oval"
                      style={{ width: "100%" }}
                    />
                    <div className="contain">
                      <h5>
                        <b>The Oval</b>
                      </h5>
                    </div>
                  </div> */}
                </div>
                {/* </div> */}
              </>
            </div>
            <Subs />
            <Shopping/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saloon;
