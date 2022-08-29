import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import { useSelector } from "react-redux";
import { Hidden } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../dropdown/Dropdown";
import Logo from "../../assets/logo.png";
import LeftDrawer from "../leftDrawer/LeftDrawer";
export default function Header() {
  const userAuth = useSelector((state) => state.AuthReducer.isUserLoggedIn);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  let searchData = "";
  for (let i = 0; i < search.length; i++) {
    if (search[i] != " ") {
      searchData += search[i];
    } else if (search[i] == " ") {
      searchData = searchData + "-";
    }
  }

  return (
    <div>
      <div className="headerContainer">
     
   
     
        <div className="logoContainer">
        <Hidden mdUp>
            <LeftDrawer />
          </Hidden>
          <Link to="/" className="logoLink">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>

        <div className="locBox">
          

          <Select>
            <MenuItem value="Faisalabad">Faisalbad</MenuItem>
            <MenuItem value="Karachi">Karachi</MenuItem>
            <MenuItem value="Lahore">Lahore</MenuItem>
            <MenuItem value="Islamabad">Islamabad</MenuItem>
          </Select>
        </div>
        <div className="searchBox">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search and more ..."
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/${searchData}`} sx={{ textDecoration: "none" }}>
              <SearchIcon className="searcIcon" />
            </Link>
          </Box>
        </div>
        
        {userAuth ? (
          <Dropdown />
        ) : (
          <Link to="/login" className="loginLink">
            <h5>Login</h5>
          </Link>
        )}

        <Link to="/add" className="sellLink">
          <h5 style={{ marginTop: "5px" }}>+SELL</h5>
        </Link>
         
      
      </div>

    </div>
  );
}
