import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopItem } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherItems }) => (
      <CollectionPreview key={id} {...otherItems}></CollectionPreview>
    ))}
  </div>
);

const MapStateToProps = createStructuredSelector({
  collections: selectShopItem,
});

export default connect(MapStateToProps)(CollectionOverview);
