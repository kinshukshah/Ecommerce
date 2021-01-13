import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component";
import {Route} from 'react-router-dom';

const HatsPage=(props) =>{
  console.log(props);
  return(
    <div>
      <h1>HAts page</h1>
    </div>
  )
};


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/hats" component={HatsPage}></Route>
    </div>
  );
}

export default App;
