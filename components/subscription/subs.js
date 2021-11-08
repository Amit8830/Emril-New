import React from "react";
import "./subs.css";
import Cars from "./Cars";
import cardata from "./cardata1";

// import { Settings } from "react-slick";
// import Slider from "react-slick";
// function ncards(val) {
// }

const Subs = () => {
  return (
    <div className="main_subs">
      <h2 className="subs_2">Subscriptions</h2>
      <div className="subs_3">
        <h4 className="sub"> Subscription</h4>
        <h4 className="new"> Newly Launched</h4>
        <h4 className="view"> View All</h4>
      </div>
      <div className="main_subs2">
        <div className="ins_sub">
          {cardata.map((val, arr) => {
            console.log(arr);
            return <Cars img={val.img} title={val.title} Rs={val.Rs} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Subs;
