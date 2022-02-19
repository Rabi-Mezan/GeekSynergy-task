
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import Navbar from './pages/Navbar/Navbar';
import Info from './pages/Info/Info';

function App() {
  return (

    <div style={{ height: '100vh' }} className=' h-full'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/info'>
            <Info></Info>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/main'>
            <Main></Main>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>


  );
}

export default App;
