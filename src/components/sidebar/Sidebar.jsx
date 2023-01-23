import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Box from '@mui/material/Box';
import logo from "./logo.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';






const Sidebar = ({user,setUser}) => {


  function click(event){
    var dat=JSON.parse(event.target.value)
    console.log(dat.Humid);
   
    localStorage.setItem("temp",dat.temp)
    localStorage.setItem('humid',dat.humid)
    localStorage.setItem('crop',dat.name);
    console.log(localStorage.getItem('crop'))
    window.dispatchEvent(new Event('storage'))

    
   
    setUser(JSON.parse(event.target.value));
  }


  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
function Logout(){

  localStorage.clear();
   navigate('/login');
}

var listofCompartment=JSON.parse(localStorage.getItem('compartment'));

var data={

  "name":"",
  "id":""
}


const lister=listofCompartment.map((n)=>
<option onClick={click} value={JSON.stringify(n)}>{n.id}</option>

);

  // localStorage.getItem('compartment').map((n)=>{

  //   console.log("heloo");
  
      
      
      
  //          })
  var role=localStorage.getItem('role');
 

  if(role=="HR"){
    console.log("the temprature is "+localStorage.getItem('temp'));
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
          
        <Box
         display="flex"
         justifyContent="center">
        <Box
          component="img"
          sx={{ height: 34}}
          alt="Logo"
          src={logo}
         
        />
   <span className="logo">WAREHOUSE</span>
  
        </Box>
           
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
 
            <li class="logout">
              <ExitToAppIcon className="icon " />
              <span onClick={Logout}>Logout</span>
            </li>
            <li class="dropdown">
              <InsertChartIcon className="icon" />
             
              <div class="dropdown">
            <span class="dropbtn">Select Compartment</span>  
  <div class="dropdown-content">
{lister}
  </div>
              </div>
            
            
            </li>
            

          </ul>
        </div>
       
      </div>
    );
    
  }
};

export default Sidebar;
