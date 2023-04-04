import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import router from './router'

import Axios from 'axios';

import { RouterProvider} from "react-router-dom";


function App() {

  

const axios = Axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

  useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    // const csrf = await axios.get('/sanctum/csrf-cookie');
    // console.log('csrf = ', csrf);
  }
  
  return (
    <div className="App">
       <RouterProvider router = {router} />
    </div>
  )
}

export default App
