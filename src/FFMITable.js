import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function FFMITable() {
  return (
    <Table style={{ marginTop: 50 }}>
      <TableHead>
        <TableRow>
          <TableCell>Zakres FFMI</TableCell>
          <TableCell>Opis</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default FFMITable;
