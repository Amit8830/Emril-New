import React from "react";
import Partner from "../Partner/Partner";
import Footer from "../Footer/Footer";
import Integrated from "./Integrated";
import Service from "../Servise/Service";
import Gurante from "../Happiness/Gurante";
import Product from "../BuyProduct/Product";
import Products from "../BuyProd/Product";
import data from "../BuyProduct/data";
import data1 from "../BuyProd/data1";
import SmallSlider from "../SmallSlide/slide";
// import cardata from "./cardata";
import "./shop.css";

const Shopping = () => {
  return (
    <div>
      <h1 className="shop">Shopping</h1>
      <div className="shop_1">
        <SmallSlider />;
      </div>

      <div className="shop_2">
        <div className="shop2_1" row justify-content-center>
          {data1.productData.map((item, index) => {
            return (
              <Products
                image={item.image}
                name={item.name}
                categories={item.categories}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div>
        <section className="py-4 container">
          <div className="shop_3" row justify-content-center>
            {data.productData.map((item, index) => {
              return (
                <Product
                  image={item.image}
                  name={item.name}
                  categories={item.categories}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>

      <div className="shop_4">
        {" "}
        <Gurante />
      </div>
      <div className="shop_5">
        <Service />
      </div>
      <div className="shop_6">
        <Integrated />{" "}
      </div>
      <Partner />
      <Footer />
    </div>
  );
};

export default Shopping;
