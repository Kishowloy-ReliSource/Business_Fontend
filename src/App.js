import './App.css';
import axios from 'axios';
import Admin from './Components/admin';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/admins"





function getAPIData()
{
  return axios.get(API_URL).then((response)=> response.data);
}

function App() {

  const [ad,setAdmins]= useState([]);

  const fetchdata= ()=>{
    fetch(API_URL)
    .then((response)=> response.json())
    .then((data)=>{
      setAdmins(data)
    })
  }

  useEffect(()=>
  {
    fetchdata()
  }, []) 

  return (
    <div className="App">
      { <Admin admins={ad}/>  }
    </div>
  );
}

export default App;
