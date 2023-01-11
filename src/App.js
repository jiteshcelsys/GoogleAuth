import './App.css';
import Navabar from './view/Navabar';
import { BrowserRouter as Router, Navigate, Route, Routes, } from 'react-router-dom'
import Post from './components/Post.js'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "357269047469-1s8ov95css793fukubt1s78hf8teq40k.apps.googleusercontent.com";

function App() {

  const isLoggedIn = useSelector((state) => { return state.isLoggedIn });
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })

  console.log(isLoggedIn);
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Navabar />
          } />
          <Route path='/post' element={isLoggedIn ? <Post /> : null}></Route >



        </Routes>
      </Router>
    </>
  );
}

export default App;
