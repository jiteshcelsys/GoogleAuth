/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Navabar from "./view/Navabar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import React from "react";
import Invalid_user from "./view/Invalid_user";

const clientId =
  "357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

function App() {
  interface Person {
    name: string;
    img: string;
    isLoggedIn: Boolean;
    message: string;
    messageArray: [];
    counterComment: string;
  }

  const isLoggedIn = useSelector((state: Person) => {
    return state.isLoggedIn;
  });
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  console.log(isLoggedIn);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navabar />} />
          <Route
            path="/post"
            element={isLoggedIn ? <Post /> : <Invalid_user />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
