import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./LoginStyle.css";
import UseLogin from "./UseLogin";
export default function Login() {
  const [{ email, setEmail, password, setPassword,ctaLoginHandler }] = UseLogin();
  return (
    <>
      <Grid Container align="center">
        <Paper className="loginCard">
          <Typography variant="h1" color="initial" className="olxLogin">
            olx
          </Typography>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField
              placeholder="Email"
              variant="standard"
              className="feild"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField
              placeholder="Password"
              variant="standard"
              className="feild"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <br />
          <Button variant="contained" color="secondary" onClick={ctaLoginHandler}>
            Sign In
          </Button>
          <br />
          <div>
            Don't have account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button color="inherit" variant="text">
                Create New
              </Button>
            </Link>
          </div>
        </Paper>
      </Grid>
    </>
  );
}
