import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./Hr.scss";
import { UserContext } from "../../context/userContext";
import Widget from "../../../components/widget/Widget";
import Widgetsm from "../../../components/widget-small/Widget-small";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import Table from "../../../components/table/Table";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEffect from 'react';
import { Link } from "react-router-dom";

// import {getuser} from '../../../public/globalstate'
// import{setuser} from '../../../public/globalstate'


const Hr = ({ user, setUser }) => {
    const navigate = useNavigate();
    console.log(localStorage.getItem('name'));
    // const us= useContext(UserContext);
    // console.log(getuser());

    if (localStorage.getItem('name')) {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="widgets">
                        <Widget type="Project" height="200px" width="300px" />
                        <Widget type="MyTask" height="200px" width="300px" />

                        <Widget type="Opening" height="200px" width="300px" />

                    </div>
                    <div className="widgets">
                        <Widget type="Upcoming Leaves" height="300px" width="250px" />
                        <Widget type="Leavs" />
                        <Widget type="Content" />
                        <Widget type="Content" />
                    </div>

                </div>
            </div>
        );
    }
   
};

export default Hr;
