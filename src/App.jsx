import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import router from './router'

import { RouterProvider} from "react-router-dom";

function App() {

  return (
    <div className="App">
       <RouterProvider router = {router} />
    </div>
  )
}

export default App
