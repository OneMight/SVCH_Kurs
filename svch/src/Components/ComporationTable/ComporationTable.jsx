import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import './ComporationTable.css'
import { useSelector } from 'react-redux';
import {jsPDF,} from 'jspdf'

import autoTable from "jspdf-autotable"

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
    
      function generate() {
        const pdfDoc = new jsPDF();
        pdfDoc.setFont("times", "bold");
        pdfDoc.setFontSize(14);
        pdfDoc.setCharSpace(0.5);
        const formattedDate = new Date().toLocaleDateString();
        pdfDoc.text(`Comporations pilots report. Date: ${formattedDate}`, 10, 10);
        const columns = ["Name", "Year","Starts","Points",'Wins','Pos in season'];
        const rows = pilots.map(stat => [stat.PilotName,stat.PilotStats[0].year,
          stat.PilotStats[0].Starts, stat.PilotStats[0].Scores,
           stat.PilotStats[0].Wins, stat.PilotStats[0].PlaceInSeason ]);

        autoTable(pdfDoc, {
          theme: "grid",
          headStyles: { fontSize: 10 },
          bodyStyles: { fontSize: 8, fontStyle: "italic" },
          head:[columns],
          body: rows,
          startY: 40,
          columnStyles: {
            0: { cellWidth: 50 }, 
            1: { cellWidth: 20 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 }, 
            4: { cellWidth: 20 },
            5: { cellWidth: 40 },
        },
        });
    
        pdfDoc.save("ComporationsPilotsReport.pdf");
  }
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
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Year</StyledTableCell>
                                <StyledTableCell align="right">Team&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Starts&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Points&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Wins&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Podiums&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Poul-pos&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Pos in season&nbsp;</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                    {row.Name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.Year}</StyledTableCell>
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
                    <button className="button-user"  onClick={generate}>Create report</button>
                </div>
            )}
        </main>
    )
}