import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "", 
    password: "",
    confirmPassword: ""
  });

  return (
    <div className='container'>
      <UserForm inputs={state} setInputs={setState}/>
    </div>
  );
}

export default App;
