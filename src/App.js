import React from 'react';


import { ToastContainer } from 'react-toastify';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Examples from 'pages/Examples';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';




function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/properties/:id" exact component={DetailsPage}></Route>
        <Route path="/checkout" exact component={Checkout}></Route>
        <Route path="/example" exact component={Examples}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
