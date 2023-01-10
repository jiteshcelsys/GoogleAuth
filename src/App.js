import './App.css';
import Navabar from './view/Navabar';
import { BrowserRouter as Router, Navigate, Route, Routes,  } from 'react-router-dom'
import Post from './components/Post.js'
import { useSelector } from 'react-redux';


function App() {
  const name= useSelector((state)=>{return state.name});
  

  return (
    <div className="App">
    
      <Router>
        <Routes>

          <Route path='/post' element={<Post />}></Route >
          <Route path='/'element={name?<Navigate replace to='/post'/>:   <Navabar /> }/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
