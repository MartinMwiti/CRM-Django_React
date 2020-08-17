import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
import AddEmployeeModal from "./backupModal";
import EditEmployeeModal from "./EditEmployeeModal";

// action
// import { HrEmployeeData } from "../../actions/employeeHR";

import API from '../../actions/api'


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

class EmployeeTable extends Component {
  state = {
    employeesDetail: [],
    newEmployeeData: {
      name: "",
      phone_no: "",
      email: "",
      department: "",
      job_title: "",
      salary: "",
    },
    editEmployeeData: {
      id: "",
      name: "",
      phone_no: "",
      email: "",
      department: "",
      job_title: "",
      salary: "",
      date_employed: "",
    },
    newEmployeeModal: false,
    editEmployeeModal: false,
  };

  //  API
  _refreshRecords() {
    API.get("/accounts/employees_hr/").then((response) =>
      this.setState({
        employeesDetail: response.data.results,
      })
    );
  }

  componentDidMount() {
    this._refreshRecords();
  }

  // ADD NEW RECORD
  addEmployee() {
    API.post("/accounts/employees_hr/", this.state.newEmployeeData).then(
      (response) => {
        let { employeesDetail } = this.state;
        employeesDetail.push(response.data);
        this.setState({
          employeesDetail, // updates employee record
          newEmployeeModal: false, // for closing the modal
          newEmployeeData: {
            name: "",
            phone_no: "",
            email: "",
            department: "",
            job_title: "",
            salary: "",
          }, //resets/clear the modal field
        });
      }
    );
  }

  // modal appear/disapper func
  toggleNewEmployeeModal() {
    this.setState({
      newEmployeeModal: !this.state.newEmployeeModal,
    });
  }

  // EDIT
  // modal appear/disappear func
  toggleEditEmployeeModal() {
    this.setState({
      editEmployeeModal: !this.state.editEmployeeModal,
    });
  }

  // Populate Edit Employee func - 'Edit button'
  editEmployeeData(
    id,
    name,
    phone_no,
    email,
    department,
    job_title,
    salary,
    date_employed
  ) {
    this.setState({
      editEmployeeData: {
        id,
        name,
        phone_no,
        email,
        department,
        job_title,
        salary,
        date_employed,
      },
      editEmployeeModal: !this.state.editEmployeeModal,
    });
  }

  // Edit func - 'Update Employee button'
  updateRecord() {
    let {
      name,
      phone_no,
      email,
      department,
      job_title,
      salary,
      date_employed,
    } = this.state.editEmployeeData;

    API.put("/accounts/employees_hr/" + this.state.editEmployeeData.id, {
      name,
      phone_no,
      email,
      department,
      job_title,
      salary,
      date_employed,
    }).then((response) => this._refreshRecords());
    // close modal after edit and set the 'editEmployeeData' fields to empty
    this.setState({
      editEmployeeData: {
        id: "",
        name: "",
        phone_no: "",
        email: "",
        department: "",
        job_title: "",
        salary: "",
        date_employed: "",
      }, //clear
      editEmployeeModal: !this.state.editEmployeeModal,
    });
  }

  // Delete Employee
  deleteEmployeeRecord(id) {
    API
      .delete("/accounts/employees_hr/" + id)
      .then((response) => this._refreshRecords());
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
      { name: "phone_no", label: "Contact" },
      { name: "email", label: "Email" },
      { name: "department", label: "Department" },
      {
        name: "salary",
        label: "Salary",
        options: {
          customBodyRender: function (value, tableMeta, updateValue) {
            return new Intl.NumberFormat().format(value); // comma separator
            // ref (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
          },
        },
      },
      { name: "date_employed", label: "Date Employed" },
      {
        name: "Actions",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            const i = tableMeta.rowIndex;
            const data = this.state.employeesDetail;
            return (
              // OPEN MODAL
              <Fragment>
                <Tooltip title="Edit">
                  <EditIcon
                    color="action"
                    onClick={this.editEmployeeData.bind(
                      this,
                      data[i].id,
                      data[i].name,
                      data[i].phone_no,
                      data[i].email,
                      data[i].department,
                      data[i].job_title,
                      data[i].salary,
                      data[i].date_employed
                    )}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteOutlineIcon
                    style={deleteIcon}
                    color="action"
                    onClick={this.deleteEmployeeRecord.bind(this, data[i].id)}
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
      // responsive: "standard",
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
        {/* ADD NEW EMPLOYEE MODAL */}
        <AddEmployeeModal
          newEmployeeModal={this.state.newEmployeeModal}
          newEmployeeData={this.state.newEmployeeData}
          addEmployee={this.addEmployee.bind(this)}
          toggleNewEmployeeModal={this.toggleNewEmployeeModal.bind(this)}
        />

        {/* EDIT EMPLOYEE MODAL */}
        <EditEmployeeModal
          editEmployeeModal={this.state.editEmployeeModal}
          editEmployeeData={this.state.editEmployeeData}
          updateRecord={this.updateRecord.bind(this)}
          toggleEditEmployeeModal={this.toggleEditEmployeeModal.bind(this)}
        />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MUIDataTable
                title={
                  <Fragment>
                    Employees Records
                    <Tooltip title="Add">
                      <AddBoxIcon
                        color="action"
                        style={addIcon}
                        onClick={this.toggleNewEmployeeModal.bind(this)}
                      />
                    </Tooltip>
                  </Fragment>
                }
                data={this.state.employeesDetail}
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

export default withStyles(styles)(EmployeeTable);


