import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { doLogin } from '../../store/actions/AuthAction';
import { useNavigate } from "react-router-dom";
export default function UseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
const dispatch = useDispatch();
const navigate = useNavigate();

const ctaLoginHandler=()=>{
  let userData ={
    email:email,
    password:password,
  }
  if (email !== "" && password !== "") {
dispatch(doLogin(userData,navigate))
console.log("data in handler", userData);
  } else {
    alert("All fields are required");
  }

  setEmail("");
  setPassword("");
}

  return [{
    email,setEmail,password,setPassword,ctaLoginHandler
  }]
}
