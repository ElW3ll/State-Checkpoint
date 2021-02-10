import React, {useState} from 'react'
import Person from './Person'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [show, setShow] = useState(false);
  const Visibilité=()=>{
    setShow(!show);
    console.log(show);
  }
  
  return (
    <div className="App">
      <h1>my profil</h1>
      <button type="button" className="btn btn-lg btn-primary" onClick={Visibilité}>
        {show ? 'Hide Person' : 'Show Person'}
      </button>
     { show && <Person/> }
     
    </div>
  );
}

export default App;
