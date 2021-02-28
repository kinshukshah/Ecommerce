import React from "react";
import "./checkout-item.syles.scss";
import { connect } from "react-redux";
import {
  removeitems,
  additems,
  reduceItemQuantity,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  removeitems,
  additems,
  reduceItemQuantity,
}) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => additems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeitems(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const MapDispatchToProps = (dispatch) => ({
  removeitems: (id) => dispatch(removeitems(id)),
  additems: (item) => dispatch(additems(item)),
  reduceItemQuantity: (item) => dispatch(reduceItemQuantity(item)),
});

export default connect(null, MapDispatchToProps)(CheckoutItem);
