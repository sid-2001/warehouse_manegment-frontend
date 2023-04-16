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


const Home = ({user,setUser}) => {
  const navigate = useNavigate();
  console.log(localStorage.getItem('id'));
  console.log(localStorage.getItem('Temp'));
  // const us= useContext(UserContext);
// console.log(getuser());
console.log(user);
if(localStorage.getItem('name')){
  return (
    <div className="home">
      <Sidebar user={user} setUser={setUser}/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget user={user} setUser={setUser} type="Temprature" height="200px" width="300px"/>
          <Widget user={user} setUser={setUser} type="Humdity"  height="200px" width="300px"/>
         
          <Widget user={user} setUser={setUser} type="Add New Compartemt"  height="200px" width="300px" />
        
        </div>
        <div className="widgets">
          <Widget user={user} setUser={setUser} type="Compartment"  height="300px" width="250px" />
          <Widget user={user} setUser={setUser} type="Balance" />
          <Widget user={user} setUser={setUser} type="Crop" />
          <Widget user={user} setUser={setUser} type="Notification" />
        </div>
     
      </div>
    </div>
  );
}
else{
  console.log("harshit");


  // Update the document title using the browser API
  navigate('/login');

 return(

  <><div></div>
    <Link to="/login" style={{ textDecoration: "none" }}>Please login</Link></>
 )
}
 
};

export default Home;
