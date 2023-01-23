import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logo from "./logo.png"
import Box from '@mui/material/Box';
const Navbar = (name) => {
  const { dispatch } = useContext(DarkModeContext);

  
  if(name=="admin"){

    return (
      <div className="navbar">
        <div className="wrapper">
        <div className="items">
        <Box
         display="flex"
         justifyContent="center">
        <Box
          component="img"
          sx={{ height: 44,backgroundColor:"white" }}
          alt="Logo"
          src={logo}
         
        />
        <Box class="title_wrapper">
   <span className="first_title">Good Morning Admin</span>
   <br></br>
   <span className="secound_title">WAREHOUSE</span>
  </Box>
        </Box>
          </div>
          <div class="right_content">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
           
          </div>
          <div class="notification">
  <NotificationsNoneOutlinedIcon color="action"></NotificationsNoneOutlinedIcon>
  
          </div>
  
          </div>
         
         
          
        </div>
      </div>
    );



  }
  else{
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="items">
      <Box
       display="flex"
       justifyContent="center">
      <Box
        component="img"
        sx={{ height: 44,backgroundColor:"white" }}
        alt="Logo"
        src={logo}
       
      />
      <Box class="title_wrapper">
 <span className="first_title">Good Morning</span>
 <br></br>
 <span className="secound_title">WAREHOUSE</span>
</Box>
      </Box>
        </div>
        <div class="right_content">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
         
        </div>
        <div class="notification">
<NotificationsNoneOutlinedIcon color="action"></NotificationsNoneOutlinedIcon>

        </div>

        </div>
       
       
        
      </div>
    </div>
  );
}};

export default Navbar;
