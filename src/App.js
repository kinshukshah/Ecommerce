import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component";
import { Route, Switch,Redirect } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shop.component";
import Header from "./Components/Header/header.component";
import SignInsignUpPage from "./Pages/signInsignUpPage/signInsignUpPage.component";
import { auth,createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckOut from "./Pages/checkout/checkout.component";

class App extends React.Component {

  unsuscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/checkout" component={CheckOut}></Route>
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInsignUpPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  } 
}

const MapDispatchToProps=dispatch =>(
    {
    setCurrentUser:user => dispatch(setCurrentUser(user))
   }
)

const MapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
export default connect(MapStateToProps,MapDispatchToProps)(App);
