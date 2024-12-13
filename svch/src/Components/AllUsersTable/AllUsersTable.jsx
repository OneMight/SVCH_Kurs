import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {BlockUser} from '../../store/Slices/userSlicer'
import { useDispatch } from 'react-redux';
function createData(idUser, name, login, email, age, nationality,isBlocked,role) {
  return { idUser, name, login, email, age, nationality,isBlocked,role };
}


export default function BasicTable(props) {
  const dispatch = useDispatch()
    const users = props.user;
    const rows = users.map(user =>(
            createData(user.idUser,user.name,
                user.login, user.email, user.age, user.nationality,
                user.isBlocked, user.role
            )
        ))
    const HandleBlock = (id)=>{
      dispatch(BlockUser(id))
      document.location.reload();
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1f1f1f',
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Login&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Age&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Nationality&nbsp;</StyledTableCell>
            <StyledTableCell align="center">is Blocked&nbsp;</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>            
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.idUser}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.login}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.nationality}</StyledTableCell>
              <StyledTableCell align="center">
                {row.isBlocked ?(
                  <span>Blocked</span>
                ):(
                  <span>Not blocked</span>
                )}
              </StyledTableCell>
              {row.role === "user                                              "?(
                 <StyledTableCell align="center"><button className='button-user block' onClick={()=> HandleBlock(row.idUser)}>
                   {row.isBlocked === false? (
                    <span>Block</span>
                ):(
                  <span>unblock</span>
                )}
                
                </button>
              </StyledTableCell>
              ):(
                <></>
              )}  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}