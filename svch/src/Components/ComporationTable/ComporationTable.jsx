import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ComporationTable.css'
import { useSelector } from 'react-redux';

function createData(Name,Year, Team, Starts, Points, Wins, Podiums,PoulPos,PosInSeason) {
    return { Name,Year, Team, Starts, Points, Wins, Podiums, PoulPos, PosInSeason };
  }

export default function ComporationTable(){
    const pilots = useSelector(state => state.pilots.comporationPilots)
    const rows = pilots.map(stat =>(
        createData(stat.PilotName,stat.PilotStats[0].year,stat.Team.teamName,
            stat.PilotStats[0].Starts, stat.PilotStats[0].Scores,
             stat.PilotStats[0].Wins, stat.PilotStats[0].Podiums,
             stat.PilotStats[0].PolePos, stat.PilotStats[0].PlaceInSeason 
        )
    ))

    return(
        <main className='comporation-main'>
            {pilots.length ===0 ?(
                <p className='error-compare'>You don't add pilot to compare</p>
            ):(
                <div className='comporation-table'>
                    <p>Compare your favorites pilots</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="right">Name</TableCell>
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
                                {row.Name}
                                </TableCell>
                                <TableCell align="right">{row.Year}</TableCell>
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
                </div>
            )}
        </main>
    )
}