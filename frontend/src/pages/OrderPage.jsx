import React, { Component } from "react";
import axios from "../lib/axios";

export default class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("/orders");
      this.setState({ orders: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { orders, loading, error } = this.state;

    if (loading)
      return (
        <p className="text-center text-gray-600 mt-10">Loading orders...</p>
      );
    if (error)
      return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-blue-1000 mb-6 text-center">
          Your Orders
        </h2>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
              >
                <p className="text-lg font-semibold text-gray-800">
                  Order ID: <span className="text-blue-600">{order._id}</span>
                </p>
                <p className="text-gray-600">
                  <strong>Total Amount:</strong>{" "}
                  <span className="text-green-600">${order.totalAmount}</span>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Products:</strong>
                </p>
                <ul className="mt-1 space-y-1 text-gray-600">
                  {order.products.map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b py-1"
                    >
                      <span>
                        {product.quantity} x{" "}
                        <span className="font-medium">
                          {product.product.name || "Product"}
                        </span>
                      </span>
                      <span className="text-gray-800 font-medium">
                        ${product.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm mt-3">
                  <strong>Ordered On:</strong>{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
