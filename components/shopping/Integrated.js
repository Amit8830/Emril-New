import React from "react";
import img1 from "./images/img1.jpeg";
import "./intigrate.css";

const Integrated = () => {
  return (
    <div className="inte">
      <h1 className="inte_1">Integrated Service Delivery</h1>
      <hr className="inte_2" />

      <div className="img_int">
        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>

        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>
        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>

        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>
        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>

        <div class="img_int_2">
          <img src={img1} alt="" width="100%;" />
        </div>
      </div>
    </div>
  );
};

export default Integrated;
