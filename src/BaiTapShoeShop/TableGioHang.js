import React, { Component } from "react";

export default class TableGioHang extends Component {
  renderTable = () => {
    return this.props.gioHang.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>

          <td>
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.props.changeNumber("minus", item);
              }}
            >
              -
            </button>
            <span className="mx-2">{item.amount} </span>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.changeNumber("plus", item);
              }}
            >
              +
            </button>
          </td>

          <td
            onClick={() => {
              this.props.handleRemove(item.id);
            }}
            className="btn btn-danger"
          >
            Xóa
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
