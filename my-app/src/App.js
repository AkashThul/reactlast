import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Navigation from './component/Navigation';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
        <Routes>
         <Route path="/" element= {<Home/>}/>
         <Route path="/home" element= {<Home/>}/>
         <Route path="/aboutus" element= {<Aboutus/>}/>
         <Route path="/contact" element= {<Contact/>}/>
         <Route path="/login" element= {<Login/>}/>
         <Route path="/signin" element= {<Signin/>}/>
         <Route path="*" element={<Error/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
