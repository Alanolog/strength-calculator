import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function FFMITable() {
  return (
    <Table style={{ marginTop: 20, marginBottom: 20 }}>
      <TableHead>
        <TableRow>
          <TableCell>Zakres FFMI</TableCell>
          <TableCell>Opis</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Poniżej 18</TableCell>
          <TableCell>Poniżej średniej</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>18-20</TableCell>
          <TableCell>Średnia</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>20-22</TableCell>
          <TableCell>Powyżej średniej</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>22-23</TableCell>
          <TableCell>Świetne</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>23-26</TableCell>
          <TableCell>Elitarne</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>26-28</TableCell>
          <TableCell>Podejrzenie zażywania sterydów</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Powyżej 28</TableCell>
          <TableCell>Praktycznie pewne użycie sterydów</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default FFMITable;
