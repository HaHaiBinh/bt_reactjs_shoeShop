import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name, description } = this.props.shoeData;
    return (
      <div className="col-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {description.length < 30
                ? description
                : description.slice(0, 30) + "..."}
            </p>
            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.shoeData);
              }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
