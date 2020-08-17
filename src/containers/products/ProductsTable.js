import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import MUIDataTable from "mui-datatables";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

// Component
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";

// action
import {
  //   updateProductData,
  // deleteProductData,
  toggleModal,
} from "../../actions/products/productData";

import API from "../../actions/api";

// Grid Styling
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class ProductTable extends Component {
  state = {
    productDetail: [],
    editProductData: {
      id: "",
      name: "",
      description: "",
      category: "",
      qty_amount: "",
      price: "",
    },
    editProductModal: false,
  };

  //  API
  _refreshRecords() {
    API.get("/products/").then((response) =>
      this.setState({
        productDetail: response.data.results,
      })
    );
  }

  componentDidMount() {
    this._refreshRecords();
  }

  // EDIT
  // modal appear/disappear func
  toggleEditProduct() {
    this.setState({
      editProductModal: !this.state.editProductModal,
    });
  }

  // Populate Edit Product func - 'Edit button'
  editProductData(
    id,
    name,
    description,
    category,
    qty_amount,
    price
  ) {
    this.setState({
      editProductData: {
        id,
        name,
        description,
        category,
        qty_amount,
        price,
      },
      editProductModal: !this.state.editProductModal,
    });
  }

  // Edit func - 'Update Product button'
  updateRecord() {
    let {
      name,
      description,
      category,
      qty_amount,
      price,
    } = this.state.editProductData;
    try {
      API.put("/products/" + this.state.editProductData.id, {
        name,
        description,
        category,
        qty_amount,
        price,
      }).then((response) => this._refreshRecords());
    } catch (error) {
      console.log(error);
    }  
    this.setState({
      editProductData: {
        id: "",
        name: "",
        description: "",
        category: "",
        qty_amount: "",
        price: "",
      }, //clear
      editProductModal: !this.state.editProductModal, //close
    });
  }

  // Delete Product
  deleteProductRecord(id) {
    API.delete("/products/" + id).then((response) => this._refreshRecords());
  }

  render() {
    const addIcon = {
      marginLeft: "10px",
      marginRight: "8px",
    };
    const deleteIcon = {
      marginLeft: "5px",
      marginRight: "8px",
    };

    const { classes } = this.props;

    const columns = [
      { name: "name", label: "Name" },
      // { name: "available", label: "Available" },
      { name: "description", label: "Description" },
      { name: "category", label: "Category" },
      { name: "qty_amount", label: "Quantity" },
      {
        name: "price",
        label: "Price",
        options: {
          customBodyRender: function (value, tableMeta, updateValue) {
            return new Intl.NumberFormat().format(value); // comma separator
          },
        },
      },
      {
        name: "Actions",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            // const i = tableMeta.rowIndex;
            // const data = this.state.productDetail;
            return (
              // OPEN MODAL
              <Fragment>
                <Tooltip title="Edit">
                  <EditIcon
                    color="action"
                    onClick={() => alert("Under Construction")}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteOutlineIcon
                    style={deleteIcon}
                    color="action"
                    onClick={() => alert("Under Construction")}
                  />
                </Tooltip>
              </Fragment>
            );
          },
        },
      },
    ];

    const options = {
      filterType: "checkbox",
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 15, 20],
      downloadOptions: { filename: "InvoiceData.csv", separator: "," },
      elevation: 6,
      selectableRows: false, // <===== will turn off checkboxes in rows
    };

    const theme = createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveStacked: {
            maxHeight: "none",
            overflowX: "auto",
          },
        },
      },
    });

    return (
      <div className={classes.root}>
        {/* ADD NEW Product MODAL */}
        <AddProducts
          toggleModal={this.props.toggleModal} // modal activate
          refreshRecords={this._refreshRecords.bind(this)}
          modalState={this.props.modalState} // boolean
        />

        {/* EDIT Product MODAL */}
        <EditProduct
          editProductModal={this.state.editProductModal} // boolean
          editProductData={this.state.editProductData}
          updateRecord={this.updateRecord.bind(this)}
          toggleEditProduct={this.toggleEditProduct.bind(this)}
        />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MUIDataTable
                title={
                  <Fragment>
                    Products Records
                    <Tooltip title="Add">
                      <AddBoxIcon
                        color="action"
                        style={addIcon}
                        onClick={this.props.toggleModal}
                      />
                    </Tooltip>
                  </Fragment>
                }
                data={this.state.productDetail}
                columns={columns}
                options={options}
                theme={theme}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modalState: state.productData.modalState,
});

export default connect(mapStateToProps, { toggleModal })(
  withStyles(styles)(ProductTable)
);
