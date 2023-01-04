import { useState } from 'react';
import {GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom'
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
import Response from '../components/Response_googel';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

function Login(){ 
 const history  =  useHistory();
 const [data, setData] = useState("");
 const [img, setImg] = useState("");

  const onSuccess = (res) =>{
    console.log("Login sucess", res.profileObj);
    console.log("name =", res.profileObj.name);
    setData(res.profileObj.name)
    setImg(res.profileObj.imageUrl);
    console.log(res.profileObj.imageUrl);
    console.log(history);
    history.push('/post');
 
  }
  const onFailure = (res) =>{
    
    setData('');
    setImg("");
    console.log('Login Failed', res);
  }
  return(
   <>
    <div id='signInButton'>
    <Response props={data} img={img}/>
     <GoogleLogin
     clientId={clientId}
     buttonText = 'login'
     onSuccess={onSuccess}
     onFailure={onFailure}
     cookiePolicy={'single_host_origin'}
     isSignedIn={true}
     />
   </div>
   </>

  )
}
export default Login;