import {GoogleLogout} from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useNavigate } from 'react-router-dom';
// const clientId = '357269047469-a5l5fcovku85bb4q207keglrqpejfion.apps.googleusercontent.com';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Logout() {
  var name= useSelector((state)=>{return state.name});
  const dispatch = useDispatch();
  console.log(name);


  const onSuccess = () =>{
  console.log(name);
  document.cookie = `${document.cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(document.cookie);
    dispatch({ type: 'UserDetails', payload: document.cookie });
    dispatch({ type: 'Image', payload: document.cookie });
   


  }
  return(
    <div id='signOutButton'>
     <NavLink to='/'>
     <GoogleLogout
      clientId={clientId}
      buttonText = 'Logout'
      onLogoutSuccess = {onSuccess}
      />
     </NavLink>

    </div>
  )
}
export default Logout