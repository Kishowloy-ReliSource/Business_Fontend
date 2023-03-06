import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AdminPanel from './Components/adminPanel';
import Dealercreate from './Components/dealercreate';
import DealerPanel from './Components/dealerPanel';
import BikeCreate from './Components/bikeCreate';
import Bikelease from './Components/bikelease';
import Lesseeapplicationshow from './Components/lesseeApplicationShow';
import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/adminpannel" element={<AdminPanel/>}/>
        <Route path='/dealercreate' element={<Dealercreate/>}/>
        <Route path='/dealerpanel' element={<DealerPanel/>}/>
        <Route path='/bikecreate' element={<BikeCreate/>}/>
        <Route path='/bikelease' element={<Bikelease/>}/>
        <Route path='/lesseeApplicationShow' element={<Lesseeapplicationshow/>}/>
        
      </Routes>
    
          {/* <App /> */}
          {/* <Login /> */}

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
