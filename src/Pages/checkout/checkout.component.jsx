import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <span style={{ fontSize: "30px" }}>Total:${total}</span>
    <div className="test-warning">
      *Please Use the Following Details To Test The Credit Card *<br></br>
      4242 4242 4242 4242 -- Expiry: 01/22 -- CVV:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const MapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(MapStateToProps)(CheckOut);
