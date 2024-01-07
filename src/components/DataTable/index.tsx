import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#151A22",
    color: "#9399A5",
    fontSize: "10px",
    padding: "2px 2px 2px 16px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "10px",
    padding: "10px 4px 10px 16px",
    color: "#ffff",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#262D39",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#1B222C",
  },
  color: "#ffff",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  rows: Array<any>;
  columns: Array<string>;
}

export default function DataTable({ rows, columns }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="customized table"
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
        }}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">
                {row?.score ? row.id : row.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row?.score ? row.name : row.point}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row?.score ? row?.score : row.multiplier}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
