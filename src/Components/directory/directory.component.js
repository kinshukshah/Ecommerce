import React from "react";
import MenuItems from "../menu-items/menuItems.component";
import "./directory.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItems key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  sections: SelectDirectorySections,
});
export default connect(MapStateToProps)(Directory);
