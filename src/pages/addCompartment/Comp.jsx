import React from 'react'
// import MailOutlineIcon from '@material-ui/icons/MailOutlineIcon'; import
// InputAdornment from '@material-ui/material/InputAdornment';
import Box from '@material-ui/core/Box';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Earbuds from "@material-ui/icons/Earbuds"; import Earbuds from
// '@mui/icons-material/Earbuds';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MuiAlert from '@mui/material/Alert';
// import LockIcon from '@mui/icons-material/Lock'; it AttachMoneyIcon from
// '@mui/icons-material/AttachMoney'
import Snackbar from '@mui/material/Snackbar';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useContext} from 'react';
// import {getuser} from '../../../public/globalstate' import{setuser} from
// '../../../public/globalstate'
import {UserContext} from '../../context/userContext';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Comp = ({user, setUser}) => {
    const [comm, setComm] = React.useState('');
    const [name,setName]=React.useState('');
  const handleChange = (e) => {
    setComm(e.target.value );
    console.log(e.target.value)
  };
  const handleConmpartmentFieldChange=(e)=>{

setName(e.target.value);
console.log(e.target.value)

  }

    //  console.log(globalinfo.getuser());

    const paperStyle = {
        padding: '15px',
        height: '50vh',
        width: 480,
        margin: "15px auto"
    }
    const avatarStyle = {
        backgroundColor: '#1bbd7e',
        marginTop: "100px"
    }
    const btnstyle = {
        margin: '8px 0'
    }
    const backgroundstyle = {
        backgroundColor: '#F0F7FF',
        height: '100vh'
    }

    

    // const handleEmailFieldChange = (e) => {
    //     setName(e.target.value)
    // };


    const navigate = useNavigate();

    async function handlesubmit() {

        const postdata = {
            userid: localStorage.getItem("id"),
            name: name,
            commodity:comm
        };

        let result = await axios.post(`http://localhost:4000/api/createcompartment`, postdata)
 console.log("the got back data is",JSON.stringify(result.data))
        
 if(result.status==200){
var userdata={

"userid":localStorage.getItem("id")

}
var Compartemtdetail=await axios.post(`http://localhost:4000/api/showallcompartment`,userdata)
            console.log("The Compartment details is"+Compartemtdetail)
            localStorage.setItem("compartment",JSON.stringify(JSON.parse(JSON.stringify(Compartemtdetail.data))))
            navigate('/dash')
 }
        //     console.log("the data is"+JSON.stringify(result.data._id))
        //     localStorage.setItem("id",result.data._id)
        //     var userdata={

        //       userid:'6319cec532280f0004ef39e9'
        //     }
        //     if(result.data._id){
        //     var Compartemtdetail=await axios.post(`http://localhost:4000/api/showallcompartment`,userdata)
        //     console.log("The Compartment details is"+Compartemtdetail)
        //     localStorage.setItem("compartment",JSON.stringify(JSON.parse(JSON.stringify(Compartemtdetail.data))))

        //     }

        //         navigate('/dash')
                // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    
              
    };

    return (
        <Grid style={backgroundstyle}>
            <Grid align='center'>
                <img
                    id="logo"
                    style={{
                        marginTop: "10vh"
                    }}
                    src="./logo.png"/></Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid
                    align='center'
                    style={{
                        padding: "20px"
                    }}>

                    <h2 id="headingstyle">Add Your Commodity</h2>
                    <h6 id="subheading">Select the commodity to store
                    </h6>
                </Grid>

                <Grid
                    container="container"
                    spacing={3}
                    style={{
                        padding: "10px",
                        borderLeft: '3px solid ',
                        borderColor: '#1678F2'
                    }}>


                    <Grid md={9} align="right">
                        <TextField
                            size="small"
                            placeholder='Enter compartement name'
                            onChange={handleConmpartmentFieldChange}
                            variant="outlined"
                            fullWidth="fullWidth"
                            required="required"/>

                    </Grid>
                </Grid>
     
                <Grid
                    container="container"
                    spacing={3}
                    style={{
                        padding: "10px",
                        borderLeft: '3px solid ',
                        borderColor: '#1678F2'
                    }}>


                    <Grid md={9} align="right">
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={comm}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Bananna">Banana</MenuItem>
          <MenuItem value="Rice">Rice</MenuItem>
          <MenuItem value="Corn">Corn</MenuItem>
        </Select>
      </FormControl>

                    </Grid>
                </Grid>
              

                <Grid
                    container="container"
                    spacing={3}
                    style={{
                        padding: "10px"
                    }}>
                    <Grid md={3} align="center"></Grid>
                    <Grid md={9}>
                        <Button
                            onClick={handlesubmit}
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            fullWidth="fullWidth">Add Compartment</Button>
                    </Grid>

                </Grid>

            </Paper>
            <Grid
                align="center"
                style={{
                    fontFamily: 'Helvetica Neue LT Std',
                    fontWeight: "500",
                    fontSize: '16px',
                    color: 'black',
                    paddingTop: '3vh'
                }}>
                <span
                    style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'Normal',
                        marginTop: '100px'
                    }}>Forgot Your Password ?
                    <a href="*">Reset Password</a>
                </span>
            </Grid>
        </Grid>

    )

}

export default Comp