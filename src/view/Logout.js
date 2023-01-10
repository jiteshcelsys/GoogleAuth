import {GoogleLogout} from 'react-google-login';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Logout() {
  var name= useSelector((state)=>{return state.name});


  const onSuccess = () =>{
  console.log(name,typeof(name));
  name='';
    console.log('Logout Successfully');
   
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