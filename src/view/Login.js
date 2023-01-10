import { useState } from 'react';
import {GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
import Response from '../components/Response_googel';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

function Login(){ 
  

  const name= useSelector((state)=>{return state.name});
  const imageUrl = useSelector((state)=>{return state.img})
  const dispatch = useDispatch();
 
  const onSuccess = (res) =>{
    
    console.log(res.profileObj);
    dispatch({type:'UserDetails',payload:res.profileObj.name})
    dispatch({type:'Image',payload:res.profileObj.imageUrl});
    console.log(res.profileObj.imageUrl);
   

  }

  const onFailure = (res) =>{
  
    console.log('Login Failed', res);
  }
  return(
   <>
    <div id='signInButton'>
    <img src={imageUrl} alt='pic' width='13px' height ='13px' />
    <span>{name}</span>
    
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