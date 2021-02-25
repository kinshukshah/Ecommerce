import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-items.styles.scss";
import {connect} from 'react-redux';
import {additems} from '../../redux/cart/cart.actions'

const CollectionItems = ({ item,additems }) => {
  const {name, imageUrl, price}=item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() =>additems(item)}>Add to Cart</CustomButton>
    </div>
  );
};

const MapDispatchToProps=(dispatch) =>({
  additems:(item) =>dispatch(additems(item))
});

export default connect(null,MapDispatchToProps)(CollectionItems);
