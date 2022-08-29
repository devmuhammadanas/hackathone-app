import React from 'react'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
import './SignupStyle.css'
import UseSignup from './UseSignup';
export default function Signup() {
  const [{ fname,setFname,lname,setLname,email,setEmail,password,setPassword,ctaSignupHandler}]= UseSignup();
  return (
 
       <Grid Container align="center">
        <Paper className="signupCard">
          <Typography variant="h1" color="initial" className="olxLogin">
            olx
          </Typography>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="First Name" variant="standard" className="feild" 
            type="name"
            value={fname}
            onChange={(e)=>setFname(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Last Name" variant="standard" className="feild"
            type="name"
              value={lname}
              onChange={(e)=>setLname(e.target.value)} />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Email" variant="standard" className="feild" type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Password" variant="standard" className="feild" type="password"
              value={password} 
            onChange={(e)=>setPassword(e.target.value)} />
          </Grid>
          <br />
          <Button variant="contained" color="secondary" onClick={ctaSignupHandler}>
          Signup
          </Button>
          <br />
          <div>
           Already have account?
            <Link to="/login" style={{textDecoration:'none',color:'black'}}>
              <Button color="inherit" variant="text">
                SignIn
              </Button>
            </Link>
          </div>
        </Paper>
      </Grid>
  
  )
}
