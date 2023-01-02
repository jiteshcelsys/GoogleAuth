import { useEffect } from 'react';
import './App.css';
import {gapi} from 'gapi-script';
import Login from './components/Login';
import Logout from './components/Logout';
// const clientId="357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com";
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"


function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
      gapi.load('client:auth2', start);
    }
  })
  var accessToken = gapi.auth
  console.log(accessToken);
  return (
    <div className="App">
      <Login/>
      <Logout/>
     <h1>hi</h1>
    </div>
  );
}

export default App;
