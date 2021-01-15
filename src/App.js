import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component";
import {Route} from 'react-router-dom';
import ShopPage from "./Pages/ShopPage/shop.component";



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </div>
  );
}

export default App;
