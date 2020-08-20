import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

// data
import data from './owid-covid-data.json'

const columns = [
  { id: "iso_code", label: "ISO Code"},
  { id: "continent", label: "Continent"},
  { id: "location", label: "Location"},
  { id: "date", label: "Date"},
  { id: "total_cases", label: "Total Cases"},
  { id: "new_cases", label: "New Cases"},
  { id: "new_cases_smoothed", label: "New Cases Smoothed"},
  { id: "total_deaths", label: "Total Deaths"},
  { id: "new_deaths", label: "New Deaths"},
  { id: "new_deaths_smoothed", label: "New Deaths Smoothed"},
  { id: "total_cases_per_million", label: "Total Cases Per Million"},
  { id: "new_cases_per_million", label: "New Cases Per Million"},
  
];

function createData(iso_code, continent, location, date, total_cases, new_cases, new_cases_smoothed, total_deaths, new_deaths, new_deaths_smoothed, total_cases_per_million,new_cases_per_million) {
  return { iso_code, continent, location, date, total_cases, new_cases, new_cases_smoothed, total_deaths, new_deaths, new_deaths_smoothed, total_cases_per_million,new_cases_per_million};
}

const rows = [];
data.forEach((item, i) => {
  rows.push(createData(item.iso_code, item.continent, item.location, item.date, item.total_cases, item.new_cases, item.new_cases_smoothed, item.total_deaths, item.new_deaths, item.new_deaths_smoothed, item.total_cases_per_million, item.new_cases_per_million));
});

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function AnalyticsComponent() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
