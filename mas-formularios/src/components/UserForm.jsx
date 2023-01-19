import React, { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {
  const { inputs, setInputs } = props;

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleValidation = (e) => {
    let { name, value } = e.target;

    setInputs({ ...inputs, [name]: value })

    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstName":
          if (!value) {
            stateObj[name] = ("First Name is required");
          } else if (value.length < 3) {
            stateObj[name] = ("First Name must be at least 2 characters");
          } else {
            stateObj[name] = ('');
          }
          break;
        case "lastName":
          if (!value) {
            stateObj[name] = ("Last Name is required");
          } else if (value.length < 3) {
            stateObj[name] = ("Last Name must be at least 2 characters");
          } else {
            stateObj[name] = ('');
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = ("Email is required");
          } else if (value.length < 5) {
            stateObj[name] = ("Email must be at least 5 characters");
          } else {
            stateObj[name] = ('');
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = ("Password is required");
          } else if (value.length < 8) {
            stateObj[name] = ("Password must be at least 8 characters");
          } else {
            stateObj[name] = ('');
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = ("Password is required!");
          } else if (inputs.password && value !== inputs.password) {
            stateObj[name] = ("Passwords must match");
          } else {
            stateObj[name] = ('');
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  }

  return (
    <form className='form-body' onChange={(e) => e.preventDefault()}>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' placeholder='Enter First Name' onChange={handleValidation}></input>
        <span>{error.firstName && <span className='err'>{error.firstName}</span>}  </span>
      </div>
      <div className='form-group'>
        <label htmlFor='lastName' >Last Name</label>
        <input type='text' name='lastName' placeholder='Enter Last Name' onChange={handleValidation}></input>
        <span>{error.lastName && <span className='err'>{error.lastName}</span>}      </span>
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' placeholder='Enter Email' onChange={handleValidation}></input>
        <span>{error.email && <span className='err'>{error.email}</span>} </span>
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' placeholder='Enter Password' onChange={handleValidation}></input>
        <span>{error.password && <span className='err'>{error.password}</span>}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='confirmPassword'>Confirm password</label>
        <input type='text' name='confirmPassword' placeholder='Confirm Your Password'
          onChange={handleValidation}></input>
        <span>{error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}</span>
      </div>

    </form>
  );
};

export default UserForm;