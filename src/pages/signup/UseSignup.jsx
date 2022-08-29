import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { doSignup } from '../../store/actions/AuthAction';

export default function UseSignup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
const ctaSignupHandler=()=>{
  let newUserData = {
    fname:fname,
    lname:lname,
    email:email,
    password:password,
  }
  console.log("new user data", newUserData);
  if (email !== "" && password !== "" && fname !== "" && lname !== "") {
   dispatch(doSignup(newUserData,navigate))

  } else {
    alert("All fields are required");
  }


}


    return [{
      fname,setFname,lname,setLname,email,setEmail,password,setPassword,ctaSignupHandler
    }]
  }
