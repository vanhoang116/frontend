import React from "react";
import Cart from "../components/ShoppingCart/Cart";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function CartPage() {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default CartPage;
