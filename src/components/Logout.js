import {GoogleLogout} from 'react-google-login';
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () =>{
    console.log('Logout Successfully');
  }
  return(
    <div id='signOutButton'>
      <GoogleLogout
      clientId={clientId}
      buttonText = {'Logout'}
      onLogoutSuccess = {onSuccess}
      />

    </div>
  )
}
export default Logout