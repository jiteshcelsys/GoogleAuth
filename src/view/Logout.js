import {GoogleLogout} from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
const clientId ="357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com"

function Logout() {

  var name= useSelector((state)=>{return state.name});
  const dispatch = useDispatch();
  console.log(name);
  const onSuccess = () =>{
 
    dispatch({ type: 'isLoggedIn', payload:false});
console.log('Logout:false')

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