import React from "react";
import Order from "../components/order/Order";
import Header from "../components/header/Header";

OrderPage.propTypes = {};

function OrderPage() {
  return (
    <div className="d-flex flex-column">
      <Header></Header>
      <Order></Order>
    </div>
  );
}

export default OrderPage;
