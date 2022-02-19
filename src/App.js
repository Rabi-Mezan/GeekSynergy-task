
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

function App() {
  return (

    <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center h-full'>
      <BrowserRouter>

        <Switch>
          <Route path='/home'>
            <Home></Home>
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
