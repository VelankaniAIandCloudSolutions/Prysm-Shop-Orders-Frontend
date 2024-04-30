import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/Layout/AppHeader";
import AppSidebar from "./components/Layout/AppSidebar";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/Account/LogInForm";
import Orders from "./pages/Orders/Orders";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/*"
          element={
            <div className="wrapper">
              <AppHeader />
              <AppSidebar />
              <div
                className="content-wrapper"
                // style={{ backgroundColor: "white" }}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
