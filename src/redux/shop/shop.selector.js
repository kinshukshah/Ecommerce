import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const SHOP_DATA = (state) => state.shop;

export const selectShopItem = createSelector(
  [SHOP_DATA],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopItem],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItem],
    (collections) => collections[collectionUrlParam]
  )
);
