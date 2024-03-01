import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ButtonCustomised } from "./ButtonCustomised";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const rows = [
//   createData(1, "Sohan", "kotnisohan09@gmail.com", "9040328628", 3.9),
// ];

export function UserList({ data, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val) => (
            <StyledTableRow key={val.id}>
              <StyledTableCell component="th" scope="row">
                {val.id}
              </StyledTableCell>
              <StyledTableCell align="right">{val.name}</StyledTableCell>
              <StyledTableCell align="right">{val.email}</StyledTableCell>
              <StyledTableCell align="right">{val.phone}</StyledTableCell>
              <StyledTableCell align="right">
                {
                  <div className="d-flex justify-content-around">
                    <Link to={`/detail/${val.id}`}>
                      <ButtonCustomised name="READ" />
                    </Link>
                    <Link to={`/update/${val.id}`}>
                      <ButtonCustomised name="EDIT" color="success" />
                    </Link>
                    <ButtonCustomised
                      name="DELETE"
                      color="error"
                      handleDelete={() => handleDelete(val.id)}
                    />
                  </div>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
