import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import MUIDataTable from "mui-datatables";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import FormInvoice from './FormInvoice'

import {
  getInvoiceData,
  toggleModal,
} from "../../actions/customers/invoice";



const InvoiceTable = (props) => {
  const invoiceData = useSelector((state) => state.invoice.invoiceData);
  const newInvoiceModal = useSelector((state) => state.invoice.newInvoiceModal);  
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getInvoiceData());
  }, [dispatch]);
  

  const classes = useStyles();

  const columns = [
    { name: "date", label: "Date" },
    { name: "invoiceOwner", label: "Name" },
    { name: "invoiceNo", label: "Invoice No" },
    { name: "product", label: "Product" },
    // {
    //   name: "product",
    //   label: "Products",
    //   options: {
    //     customBodyRender: (value, tableMeta, updateValue) => (
    //       <div>{value.join(",")}</div>
    //     ),
    //   },
    // },
    { name: "quantity", label: "Quantity" },
    { name: "mode", label: "Mode" },
    { name: "status", label: "Status" }, // default pending
    {
      name: "payment_made",
      label: "Paid",
      options: {
        customBodyRender: function (value, tableMeta, updateValue) {
          return new Intl.NumberFormat().format(value); // comma separator
        },
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Tooltip title="Edit">
              <EditIcon
                color="action"
                onClick={() =>
                  window.alert(
                    `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
                  )
                }
              />
            </Tooltip>
          );
        },
      },
    },
  ];

  return (
    <div className={classes.root}>
      {/* ADD NEW EMPLOYEE MODAL */}
      <FormInvoice
        toggleModal={() => dispatch(toggleModal())} // modal activate
        getInvoiceData={() => dispatch(getInvoiceData())}
        newInvoiceModal={newInvoiceModal} // boolean
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MUIDataTable
              title={
                <Fragment>
                  Purchase Invoice
                  <Tooltip title="Add">
                    <AddBoxIcon
                      color="action"
                      style={addIcon}
                      onClick={() => dispatch(toggleModal())}
                    />
                  </Tooltip>
                </Fragment>
              }
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

InvoiceTable.propTypes = {
  getInvoiceData: PropTypes.func,
  toggleModal: PropTypes.func,
  addInvoiceData: PropTypes.func,
  newInvoiceModal: PropTypes.bool,
};

export default InvoiceTable;


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
  selectableRows: false,
};

const addIcon = {
  marginLeft: "10px",
  marginRight: "8px",
};
const deleteIcon = {
  marginLeft: "5px",
  marginRight: "8px",
};
