import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios'
import {
  Grid,

  Avatar,
  TextField,

  Typography,
  Link
} from '@material-ui/core'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}
;
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
console.log("hello i am here")
var compartment=localStorage.getItem('compartment');
console.log("hello the compartment is"+compartment)
export default function Admin() {

  var navigate=useNavigate()

  const [temp, setTemp] = useState("");
  const [humid, setHumid] = useState("");
  var handletempchange=(e)=>{
  
   setTemp(e.target.value)
  
  
  }
  var handlehumidchange=(e)=>{
  
  setHumid(e.target.value)
  
  
  }
  
  async function handlesubmit(e) {
  console.log((e.currentTarget.value))
  var val=e.currentTarget.value
    const postdata = {
        'id':(val),
        'adTemp': temp,
        'adHumid': humid
    };
  
    let result = await axios.post(`http://localhost:4000/api/activatecompartment`, postdata)
  
    
        console.log("the data is"+JSON.stringify(result.data._id))
        
          
            // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  
          
  }
var userdata={

  userid:localStorage.getItem('id')
}
axios.post(`http://localhost:4000/api/showallcompartmentadmin`).then((data)=>{

console.log("the data is ",data)
localStorage.setItem("compartmentadmin",JSON.stringify((data.data)))



})
           
          
var data=JSON.parse(JSON.stringify(localStorage.getItem('compartmentadmin')))
console.log("sdfsdfdsfds",data[0])
  return (



    <TableContainer component={Paper}>


      <h1> Pending Request</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead>
          
          <TableRow>
           
            <TableCell align='left'>compartment name</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">status</TableCell>
           
            <TableCell align="right">Commodity</TableCell>
           

            
          </TableRow>
        </TableHead>
        <TableBody>
          {JSON.parse(data).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                                                      {row.name}
              </TableCell>
             
              <TableCell align="right">{row._id}</TableCell>
              
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.commodity}</TableCell>
              <TextField
                            size="small"
                            onChange={handletempchange}
                            placeholder='Temp-Feed'
                            variant="outlined"
                            />

<TextField
                            size="small"
                            onChange={handlehumidchange}
                            placeholder='Humid-Feed'
                            variant="outlined"
                            />              
                    
                    <Button variant="contained" onClick={handlesubmit} value={row._id}>Avtivate Compartment</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
