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

const MapStateToProps=state=>({
  currentUser:state.user.currentUser
})
export default connect(MapStateToProps,MapDispatchToProps)(App);
