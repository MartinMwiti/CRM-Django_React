import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types"


import MUIDataTable from "mui-datatables";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { getInvoiceData } from "../../actions/customers/invoice"



const TableSection = (props) => {

  const invoiceData = useSelector((state) => state.invoice.invoiceData); // similar to mapStateToProps/ Receives redux state as props.
  const dispatch = useDispatch() // dispatch an action. use dispatch(func) anywhere, say onClick(dispatch(func))

  useEffect(() => {
    dispatch(getInvoiceData());
  }, [dispatch]);

  const classes = useStyles();

  const columns = [
    { name: "invoiceNo", label: "Invoice No" },
    { name: "mode", label: "Mode" },
    { name: "date", label: "Date" },
    { name: "quantity", label: "Quantity" },
    { name: "status", label: "Status" },
    { name: "invoiceOwner", label: "Customer" },
    { name: "product", label: "Products" },
    // {
    //   name: "product",
    //   label: "Products",
    //   options: {
    //     customBodyRender: (value, tableMeta, updateValue) => (
    //       <div>{value.join(",")}</div>
    //     ),
    //   },
    // },
    {
      name: "payment_made",
      label: "Amount paid",
      options: {
        customBodyRender: function (value, tableMeta, updateValue) {
          return new Intl.NumberFormat().format(value); // comma separator
        },
      },
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MUIDataTable
              title={"Recent Purchases Invoice"}
              data={invoiceData}
              columns={columns}
              options={options}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

TableSection.propTypes = {
  invoiceData: PropTypes.object
};

export default TableSection;


// Table Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const options = {
  filterType: "checkbox",
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15, 20],
  downloadOptions: { filename: "InvoiceData.csv", separator: "," },
  elevation: 6,
};