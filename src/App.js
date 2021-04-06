import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Store from "./components/Store";
// import Product from "./pages/product"


class App extends Component {
render() { 
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Store /></Route>
        {/* <Route path="/store"><Product /></Route>  */}
      </Switch>
    </Router>
  );
 }
}

export default App;