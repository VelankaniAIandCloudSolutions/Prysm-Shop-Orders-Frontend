import React from "react";
import { Link } from "react-router-dom";

export default function AppSidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="/prysmLogo.jpg"
          alt="AutomHR Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">Prysm Shop</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  Accounts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Users</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  Order Management
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Orders</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
