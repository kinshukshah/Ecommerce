import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ collections, match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
