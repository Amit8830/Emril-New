import React from "react";
import "./Product.css";

const Products = (props) => {
  return (
    <div className="prod3">
      <div className="prod_4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.image} class="card-img-top img-fluid" alt="img" />
          <div className="card-body">
            <h5 className="card-title">Name.{props.name}</h5>
            <h5 className="card-title">{props.categories}</h5>
            <p className="card-text">Rs.{props.price}</p>
            <button class="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
