import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shop.component";
import Header from "./Components/Header/header.component";
import signInsignUpPage from "./Pages/signInsignUpPage/signInsignUpPage.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signIn" component={signInsignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
