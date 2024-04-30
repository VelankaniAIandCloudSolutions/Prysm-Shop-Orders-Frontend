import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OrdersTable from "../../components/Orders/OrdersTable";
export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    await axios
      .get("orders/get-orders")
      .then((response) => {
        console.log(response.data.orders);
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  return (
    <div className="container">
      <div className="row align-items-center py-4">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <h2 className="mb-0">Orders</h2>
            <span className="ms-3 fs-4 text-muted">|</span>
            <nav aria-label="breadcrumb" className="d-inline-block ms-3">
              <ol className="breadcrumb bg-transparent m-0 p-0">
                <li className="breadcrumb-item">
                  <a href="/">
                    <i className="fas fa-home me-1"></i>Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>
                    <i className="fas fa-shopping-cart me-1"></i>
                    Orders
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <Link to="/orders/create" className="btn btn-success">
            Create Order
          </Link>
        </div>
      </div>
      <OrdersTable orders={orders} />
    </div>
  );
}
