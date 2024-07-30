import { useState } from 'react'

import './App.css'
import Sidebar from "./components/sidebar"


function App() {

  return (
    <>
    <div className='App'>
      
      {/* below is how to call imported component */}
      <Sidebar /> 
        

    </div>
    </>
    

  )
}

export default App;
