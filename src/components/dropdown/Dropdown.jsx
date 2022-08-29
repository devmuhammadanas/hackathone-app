import React from "react";
import { useDispatch,useSelector } from "react-redux";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Fade, Box, Paper, TextField } from "@mui/material";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import "./DropdownStyle.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { doLogout } from "../../store/actions/AuthAction";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
export default function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
const userName = useSelector((state)=>state.AuthReducer.user)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const closeHandler = ()=>{
    setOpen(false)
  }

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const logoutHandler = () => {
    console.log("logoutandler press");
    dispatch(doLogout(navigate("/")));
  };

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        <img src={Avatar} alt="" className="avatarImg" />
        <ArrowDropDownIcon />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ p: 1 }}>
              <Paper elevation={5} style={{ width: "300px", height: "auto" }}>
                <div className="profileContainer">
                  {/* <img src={Avatar} alt="Profile" className="profileImg" /> */}
                  <TextField
                    type="file"
                    className="profileImg"
                  />
                  {/* <AddAPhotoIcon size={50} className="cameraIcon"/> */}

                  {/* <Button color="inherit" className="profileImg">

                  </Button>
                   */}
                  <div>
                    <small>Hello</small>
                    {/* here will be userName */}
                    <h3>Welcome</h3>
                  <p>
                  {userName?.email}
                  </p>
                  </div>
                </div>

                <hr />
                <List component="nav" aria-label="main mailbox folders">
                <Link to="/add" style={{textDecoration:'none',color:'black'}}>
                  <ListItemButton
                onClick={closeHandler}
               
                  >
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                   
                    <ListItemText primary="Sell Now" />

                   
                  </ListItemButton>
                  </Link>
                  <Link to="/myads" style={{textDecoration:'none',color:'black'}}>

                  <ListItemButton
                onClick={closeHandler}
                
                  >
                    <ListItemIcon>
                      <SimCardRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Ads" />
 
                  </ListItemButton>
                  </Link>
                  <Link to="/myfvrt" style={{textDecoration:'none',color:'black'}}>

                  <ListItemButton
                onClick={closeHandler}
           
                  >

                    <ListItemIcon>
                      <FavoriteBorderRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Favourite" />
 
                  </ListItemButton>
                  </Link>
                  <ListItemButton onClick={logoutHandler}>
                    <ListItemIcon>
                      <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Paper>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
