import {GoogleLogin } from 'react-google-login';
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Login(){ 
  const onSuccess = (res) =>{
    console.log("Login sucess", res.profileObj);
    console.log("name =", res.profileObj.name);
  }
  const onFailure = (res) =>{
    console.log('Login Failed', res);
  }
  return(
    <div id='signInButton'>
      <GoogleLogin
      clientId={clientId}
      buttonText = 'login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      />

    </div>
  )
}
export default Login;