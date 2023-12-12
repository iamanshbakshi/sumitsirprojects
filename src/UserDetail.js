import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, Proteins) {
  return { name, calories, fat, carbs, Proteins};
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,4.3 ,<a href="view0">view</a>),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<a href="view1">view</a>),
  createData('Eclair', 262, 16.0, 24, 6.0,<a href="view2">view</a>),
  createData('Cupcake', 305, 3.7, 67, 4.3,<a href="view3">view</a>),
  createData('Gingerbread', 356, 16.0, 49, 3.9,<a href="view4">view</a>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Proteins&nbsp;(g)</TableCell>
            <TableCell align="right">Action&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.Proteins}</TableCell>
              <TableCell align="right"><a href="view">View</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}