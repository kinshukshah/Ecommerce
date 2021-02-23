import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utils';
import { connect } from "react-redux";
const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signIn" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state =>({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
