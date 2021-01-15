import React from "react";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherItems }) => (
          <CollectionPreview key={id} {...otherItems}></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
