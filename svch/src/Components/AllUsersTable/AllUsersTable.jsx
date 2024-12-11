import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(idUser, name, login, email, age, nationality,isBlocked) {
  return { idUser, name, login, email, age, nationality,isBlocked };
}


export default function BasicTable(props) {
    const users = props.user;
    const rows = users.map(user =>(
            createData(user.idUser,user.name,
                user.login, user.email, user.age, user.nationality,
                user.isBlocked
            )
        ))
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name&nbsp;</TableCell>
            <TableCell align="right">Login&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Age&nbsp;</TableCell>
            <TableCell align="right">Nationality&nbsp;</TableCell>
            <TableCell align="right">is Blocked&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.idUser}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.login}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.isBlocked}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}