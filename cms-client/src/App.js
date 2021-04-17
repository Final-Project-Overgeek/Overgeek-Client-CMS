import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Home,
  Login,
  AddLecturer,
  EditLecturer
} from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/edit-lecturer/:id'>
            <Navbar/>
            <EditLecturer/>
          </Route>
          <Route path='/detail-lecturer/:id'>
            {/* detail */}
          </Route>
          <Route path='/add-lecturer'>
            <Navbar/>
            <AddLecturer/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
