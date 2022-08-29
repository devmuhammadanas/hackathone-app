import React, { useState } from "react";
import "./LeftDrawerStyle.css";
import { useSelector,useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Drawer ,List,ListItemText,ListItemIcon,ListItemButton} from "@mui/material";
import "./LeftDrawerStyle.css";
import Avatar from "../../assets/avatar.png";
import { doLogout } from "../../store/actions/AuthAction";
export default function LeftDrawer() {
  const userName = useSelector((state) => state.AuthReducer.user);
const dispatch = useDispatch()
const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    console.log("logoutandler press");
    dispatch(doLogout(navigate("/")));
  };



  return (
    <>
      <div style={{ marginTop: "12px" }}>
        <MenuIcon size={30} onClick={handleDrawerOpen} />
      </div>
      <Drawer
        className="drawerPaper"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div onClick={handleDrawerClose}>
          <div className="drawerContainer">
            <h3 style={{paddingLeft:'20px',paddingTop:'20px'}}> X </h3>
            <div className="userContainer">
              <img src={Avatar} alt="" className="photo" />
              <div style={{ marginLeft: "20px" }}>
                <small style={{ lineHeight: "0px" }}>Hello</small>
                <h3 style={{ lineHeight: "0px" }}>Welcome</h3>
                <p style={{ lineHeight: "10px" }}>{userName.email}</p>
              </div>
            </div>
            <hr />
            <List component="nav" aria-label="main mailbox folders">
                <Link to="/add" style={{textDecoration:'none',color:'black'}}>
                  <ListItemButton
                onClick={handleDrawerClose}
               
                  >
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                   
                    <ListItemText primary="Sell Now" />

                   
                  </ListItemButton>
                  </Link>
                  <Link to="/myads" style={{textDecoration:'none',color:'black'}}>

                  <ListItemButton
                onClick={handleDrawerClose}
                
                  >
                    <ListItemIcon>
                      <SimCardRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Ads" />
 
                  </ListItemButton>
                  </Link>
                  <Link to="/myfvrt" style={{textDecoration:'none',color:'black'}}>

                  <ListItemButton
                onClick={handleDrawerClose}
           
                  >

                    <ListItemIcon>
                      <FavoriteBorderRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Favourite" />
 
                  </ListItemButton>
                  </Link>
                  <ListItemButton onClick={logoutHandler} >
                    <ListItemIcon>
                      <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>

          </div>
        </div>
      </Drawer>
    </>
  );
}
