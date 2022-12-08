
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
// import '../../App.css'
import './Form.css';


function Form() {

  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }


  return (
    <div className="Form">

      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
      }
      

    </div>
  );
}

export default Form;