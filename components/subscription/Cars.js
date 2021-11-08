import React, { Component } from "react";
import Slider from "react-slick";
import "./cars.css";
// import cardata from "./cardata"

export default class SimpleSlider extends Component {
  render(props) {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    return (
      <div className="car_00">
        <Slider {...settings}>
          <div className="car_0">
            <img className="car_1" src={this.props.img} alt="img" />
            <h3 className="car_2">{this.props.title}</h3>
            <h3 className="car_3"> Rs.{this.props.Rs}</h3>
          </div>
          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
