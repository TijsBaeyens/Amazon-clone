import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51M4AxGLIDOoCM1C0XT2X8Rl4ONjhgrl80449jZTxKGOCBPlY3bTwHDOf2CWFPT0llXtQYCRdXpjf0NZwTCLjHtx600YX0uZJHy"
  );

function App() {
  const {dispatch} = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    }, []);
  return (
<Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;