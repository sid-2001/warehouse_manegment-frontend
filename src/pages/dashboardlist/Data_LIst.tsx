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
import axios from 'axios'
var data=JSON.parse(JSON.stringify(localStorage.getItem('compartment')))

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}


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
export default function BasicTable() {

  var navigate=useNavigate()

var addcompartment=()=>{
  
navigate('/comp')


}
var userdata={

  userid:localStorage.getItem('id')
}
axios.post(`http://localhost:4000/api/showallcompartment`,userdata).then((data)=>{

console.log("the data is ",data.data)
localStorage.setItem("compartment",JSON.stringify(JSON.parse(JSON.stringify(data.data))))



})
           
          



  return (



    <TableContainer component={Paper}>


      <h1>  <Button variant="outlined"
        onClick={addcompartment}
      >+Add Compartment</Button></h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead>
          
          <TableRow>
           
            <TableCell>compartment name</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Humid&nbsp;(g)</TableCell>
            <TableCell align="right">status&nbsp;(g)</TableCell>
           
            <TableCell align="right">Commodity&nbsp;(g)</TableCell>

            
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
             
              <TableCell align="right">{row.Temp}</TableCell>
              <TableCell align="right">{row.Humid}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.commodity}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
