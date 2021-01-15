import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./Pages/ShopPage/shop.component";
import Header from "./Components/Header/header.component";



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
