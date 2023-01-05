import './App.css';
import Navabar from './view/Navabar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './components/Post.js'


function App() {

  return (
    <div className="App">
      <Navabar />
      <Router>
        <Switch>
          <Route path='/post'>{<Post />}</Route >
          <Route path='/'>{<Navabar />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
