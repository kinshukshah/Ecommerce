import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../Components/collection-items/collection-items.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const MapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(MapStateToProps)(CollectionPage);
