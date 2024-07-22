import { useState } from 'react';
import Navbar from './compnents/Navbar';
import Heading from './Heading';

function App() {

  return (

      <div>

        <Navbar/>
        <h1 style={{color: "red"}}>hello world!</h1>
        <Heading />
      </div>
  )
}

export default App
