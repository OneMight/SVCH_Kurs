import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Team&nbsp;</TableCell>
            <TableCell align="right">Starts&nbsp;</TableCell>
            <TableCell align="right">Points&nbsp;</TableCell>
            <TableCell align="right">Wins&nbsp;</TableCell>
            <TableCell align="right">Podiums&nbsp;</TableCell>
            <TableCell align="right">Poul-pos&nbsp;</TableCell>
            <TableCell align="right">Pos in season&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Year}
              </TableCell>
              <TableCell align="right">{row.Team}</TableCell>
              <TableCell align="right">{row.Starts}</TableCell>
              <TableCell align="right">{row.Points}</TableCell>
              <TableCell align="right">{row.Wins}</TableCell>
              <TableCell align="right">{row.Podiums}</TableCell>
              <TableCell align="right">{row.PoulPos}</TableCell>
              <TableCell align="right">{row.PosInSeason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}