import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
import Response from '../components/Response_googel';
const clientId = "357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

function Login() {
  const history = useNavigate();
  const name = useSelector((state) => { return state.name });
  console.log(name);
  const imageUrl = useSelector((state) => { return state.img })
  const dispatch = useDispatch();

  const onSuccess = (res) => {

    console.log(res.profileObj);
    console.log(name);
    console.log(imageUrl);

    dispatch({ type: 'isLoggedIn', payload: true });
    console.log('Login:true')
    
    history('/post')

  }

  const onFailure = (res) => {

    console.log('Login Failed', res);
  }
  return (
    <>
      <div className='LoginCenter'>
        <GoogleLogin
          clientId={clientId}
          buttonText='login'
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