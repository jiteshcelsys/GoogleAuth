import {GoogleLogout} from 'react-google-login';
import { useHistory } from 'react-router-dom';
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Logout() {
 const history = useHistory();
  const onSuccess = () =>{
    // const cookies = document.cookie.split(";");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log('Logout Successfully');
    history.push('/about');
  }
  return(
    <div id='signOutButton'>
      <GoogleLogout
      clientId={clientId}
      buttonText = 'Logout'
      onLogoutSuccess = {onSuccess}
      />

    </div>
  )
}
export default Logout