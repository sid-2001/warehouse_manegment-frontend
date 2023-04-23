import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { height } from "@mui/system";

import Slider from '@mui/material/Slider';
import { useEffect } from 'react'
import { Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Paper } from "@material-ui/core";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


const tempratur={
"Bajra":14,
"Udad":26
}



const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

const humid = [
  {
    value: 0,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 37,
    label: '37',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const Widget = ({ type,height,width,user,setUser }) => {



  useEffect(() => {
    const handleStorage = () => {
    console.log("a change has occured");
    }
  
    window.addEventListener('storage', handleStorage())
    
  }, [])



  useEffect(() => {
    console.log("user has changed the user")
    console.log(JSON.stringify(user));
    
  }, [user])

  function returntemp(value){
var temp;
    for (const property in tempratur) {
      if(property==value){
        temp=tempratur[property]

      }
    }
    console.log("the tempratue of your crop is temp" + user.Temp+" threshold is "+temp);

    if(user.Temp>temp){
      return "Temprature is Very high for your Crop"
    }
    else{
      return "Normal temprature"
    }
    }


  console.log(localStorage.getItem('temp'));
  let data;
  const mystyle = {
    "height":height,
    "min-width":width
  };
  //temporary
  const amount = 100;
  const diff = 20;

 if(type=="Temprature" ){
  console.log(user);

  return (
  
    <div className="widget" style={mystyle}>
     
      <div className="left">
        <span className="title">{type} Celcius</span>
        <span className="counter">

        <Box sx={{ width: 300 }}>
          <h1>{user.Temp}</h1>
      <Slider
        aria-label="Restricted values"
        defaultValue={user.Temp}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
        <Button variant="contained">Increase Temprature</Button>
        <Button variant="contained">Decrease Temprature</Button>

    </Box>
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  );


 }



 if(type=="Humdity"){



  return (
    <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type} (g/m^3)</span>
        <span className="counter">

        <Box sx={{ width: 300 }}>
        <h1>{user.Humid}</h1>
      <Slider
        aria-label="Restricted values"
        defaultValue={user.humid}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={humid}
      />
    </Box>
    <Button variant="contained">Decrease Humidity</Button>
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  );

 }



 if(type=="Crop"){

 return( <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">

       <h1>{user.name}</h1>
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
<br></br>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Add Crop
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Aloo</option>
          <option value={20}>Dragon Fruit</option>
          <option value={30}>Pumpkin</option>
          <option value={30}>Okra</option>
        </NativeSelect>


       
        <Button variant="contained">Add Crop</Button>
      </FormControl>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>)

 }


 if(type=='Notification'){
  return (
    <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">
       {returntemp(user.name)}
       
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  );
 }
 if(type=='Compartment'){
  return (
    <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">
       <h1>{user.id}</h1>
       
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  );
 }


if(type=="Add New Compartemt"){  return (
    <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type}</span>z
        <span className="counter"></span>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select Compartment
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>K</option>
          <option value={20}>L</option>
          <option value={30}>P</option>
        </NativeSelect>

        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select Compartment
        </InputLabel>

        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'crop',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Chana</option>
          <option value={20}>Gobi</option>
          <option value={30}>ALOO</option>
        </NativeSelect>
        <Button variant="contained">Add Compartment</Button>
      </FormControl>
    </Box>
        </div>
      
      </div>
    
  );
 }
 else{
  return (
    <div className="widget" style={mystyle}>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">

       
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  );
 }
};

export default Widget;
