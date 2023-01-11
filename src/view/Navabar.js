import Login from '../view/Login';
import Logout from '../view/Logout';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Response from './Response_googel';
const clientId = "357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

const Navabar = () => {
  const isLoggedIn= useSelector((state)=>{return state.isLoggedIn});

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