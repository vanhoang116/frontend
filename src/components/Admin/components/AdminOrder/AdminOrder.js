import React from "react";
import "./AdminOrder.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function AdminOrder(props) {
  return (
    <Router>
      <div className="order">
        <span>Orders</span>
        <Switch>
          <Route path="/admin/order" exact component={AdminOrderAll}></Route>
        </Switch>
        {/* <ToastContainer /> */}
      </div>
    </Router>
  );
}

export default AdminOrder;
