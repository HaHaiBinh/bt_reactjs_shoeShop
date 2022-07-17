import React, { Component } from "react";
import { shoeArr } from "./dataShoeShop";
import ItemShoe from "./ItemShoe";
import TableGioHang from "./TableGioHang";

export default class ExShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    gioHang: [],
  };

  renderShoe = () => {
    return this.state.shoeArr.map((item, index) => {
      return (
        <ItemShoe
          handleAddToCart={this.handleAddToCart}
          shoeData={item}
          key={item.id}
        />
      );
    });
  };

  handleAddToCart = (sp) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == sp.id;
    });
    let cloneGioHang = [...this.state.gioHang];

    if (index == -1) {
      let newSp = { ...sp, amount: 1 };
      cloneGioHang.push(newSp);
    } else {
      cloneGioHang[index].amount++;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  handleRemove = (idShoe) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idShoe;
    });
    if (index !== -1) {
      let cloneGioHang = [...this.state.gioHang];
      cloneGioHang.splice(index, 1);
      this.setState({
        gioHang: cloneGioHang,
      });
    }
  };

  changeNumber = (action, sp) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == sp.id;
    });
    let cloneGioHang = [...this.state.gioHang];
    if (index !== -1) {
      if (action === "minus" && cloneGioHang[index].amount > 1) {
        cloneGioHang[index].amount--;
        console.log("cloneGioHang[index]: ", cloneGioHang[index]);
        console.log("cloneGioHang: ", cloneGioHang);
      } else if (action === "plus") {
        cloneGioHang[index].amount++;
      }
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  render() {
    return (
      <div className="container py-5">
        {this.state.gioHang.length > 0 && (
          <TableGioHang
            gioHang={this.state.gioHang}
            handleRemove={this.handleRemove}
            changeNumber={this.changeNumber}
          />
        )}
        <div className="row">{this.renderShoe()}</div>;
      </div>
    );
  }
}
