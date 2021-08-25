import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function MaxWeightPerRepTable({ max }) {
  const percentagesRM = [
    1, 0.97, 0.94, 0.92, 0.89, 0.86, 0.83, 0.81, 0.78, 0.75, 0.73, 0.71, 0.7,
    0.68, 0.67, 0.65, 0.64, 0.63, 0.61, 0.6, 0.59, 0.58, 0.57, 0.56, 0.55, 0.54,
    0.53, 0.52, 0.51, 0.5,
  ];
  return (
    <Table style={{ marginTop: 50 }}>
      <TableHead>
        <TableRow>
          <TableCell>Ilość Powtórzeń</TableCell>
          <TableCell>Ciężar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {percentagesRM.map((el, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{Math.round(max * el * 10) / 10} kg</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default MaxWeightPerRepTable;
