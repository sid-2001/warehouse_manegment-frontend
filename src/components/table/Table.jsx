import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      TickedId: 1143155,
      Issue: "Navbar not Working",
      Project:"Med99",
      customer: "John Smith",
      Date: "1 March",
      amount: 785,
      Salary:34343,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      TicketId: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">TicketId</TableCell>
            <TableCell className="tableCell">Issue</TableCell>
            <TableCell className="tableCell">Project</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Salary</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.TicketId}>
              <TableCell className="tableCell">{row.TicketId}</TableCell>
              <TableCell className="tableCell">{row.Issue}</TableCell>
              <TableCell className="tableCell">{row.Project}</TableCell>
              <TableCell className="tableCell">{row.Date}</TableCell>
              <TableCell className="tableCell">{row.Salary}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
