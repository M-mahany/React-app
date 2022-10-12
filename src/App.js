import React, { Component } from 'react';
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home'
import Register from './components/register';
import Login from './components/login';


class App extends Component {
  state = {  } 
  render() { 
    return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    );
  }
}
 
export default App;