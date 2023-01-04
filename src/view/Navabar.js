import Login from '../view/Login';
import Logout from '../view/Logout';
import {gapi} from 'gapi-script';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Response from './Response_googel';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

const Navabar = () =>{
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
      gapi.load('client:auth2', start);
      
    }
  })

  return(
    <>
      <div className="NavBar">
        <button  className="LBtn">{<Login/>}</button>
        <button  className="LBtn">{<Logout/>}
        </button>

      </div>
   
   
    </>
  )
}
export default Navabar;