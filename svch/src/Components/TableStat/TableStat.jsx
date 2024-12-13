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
function createData(Year, Team, Starts, Points, Wins, Podiums,PoulPos,PosInSeason) {
  return { Year, Team, Starts, Points, Wins, Podiums, PoulPos, PosInSeason };
}


export default function BasicTable(props) {
    const pilot = props.pilot;
    const pilotstat = pilot.PilotStats
    const rows = pilotstat.map(stat =>(
            createData(stat.year,pilot.Team.teamName,
                stat.Starts, stat.Scores, stat.Wins, stat.Podiums,
                stat.PolePos, stat.PlaceInSeason 
            )
        ))

        const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#2C2B2B',
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Team&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Starts&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Points&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Wins&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Podiums&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Poul-pos&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Pos in season&nbsp;</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.Year}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Team}</StyledTableCell>
              <StyledTableCell align="right">{row.Starts}</StyledTableCell>
              <StyledTableCell align="right">{row.Points}</StyledTableCell>
              <StyledTableCell align="right">{row.Wins}</StyledTableCell>
              <StyledTableCell align="right">{row.Podiums}</StyledTableCell>
              <StyledTableCell align="right">{row.PoulPos}</StyledTableCell>
              <StyledTableCell align="right">{row.PosInSeason}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}