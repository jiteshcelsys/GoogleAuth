import Login from './Login';
import Logout from './Logout';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';

const clientId = "357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

const Navabar = () => {
  interface Person {
    name: string;
     img: string;
      isLoggedIn: Boolean;
      message: string; messageArray: []; counterComment: string

  }
  const isLoggedIn= useSelector((state:Person)=>{return state.isLoggedIn});

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
      gapi.load('client:auth2', start);

    }
  })

  return (
    <>
      {!isLoggedIn ? <button className="LBtn">{<Login />}</button>: <button className="LBtn">{<Logout />}</button>}
    </>
  )
}
export default Navabar;