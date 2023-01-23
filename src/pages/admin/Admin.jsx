import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import {UserContext} from "../../context/userContext";
import Widget from "../../components/widget/Widget";
import Widgetsm from "../../components/widget-small/Widget-small";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  useEffect  from 'react';
import { Link } from "react-router-dom";

// import {getuser} from '../../../public/globalstate'
// import{setuser} from '../../../public/globalstate'


const Admin = ({user,setUser}) => {
  const navigate = useNavigate();
  console.log(localStorage.getItem('id'));
  console.log(localStorage.getItem('Temp'));
  // const us= useContext(UserContext);
// console.log(getuser());


  return (


  
    <div className="home">
      
      <div className="homeContainer">
        <Navbar name="admin" />
        <div className="widgets">
          <Widget user={user} setUser={setUser} type="Manage Storage" height="90%" width="90%"/>
    
        
        </div>
  
     
      </div>
    </div>
  );
}


export default Admin;
