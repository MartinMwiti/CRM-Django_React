import React, { Component } from "react";
import {
  Button,
  Label,
  Input,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class EditEmployeeModal extends Component {

  render() {
    return (
      <div className="App container">
        <Modal isOpen={this.props.editEmployeeModal} scrollable={true}>
          <ModalHeader toggle={this.props.toggleEditEmployeeModal}>
            Updating {this.props.editEmployeeData.name} Record
          </ModalHeader>
          <ModalBody
          // style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
          >
            <FormGroup>
              <Label for="title">Name</Label>
              <Input
                id="name"
                value={this.props?.editEmployeeData?.name}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.name = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Contact</Label>
              <Input
                id="contact"
                value={this.props?.editEmployeeData?.phone_no}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.phone_no = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Email</Label>
              <Input
                id="email"
                value={this.props?.editEmployeeData?.email}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.email = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Department</Label>
              <Input
                type="select"
                id="department"
                value={this.props?.editEmployeeData?.department}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.department = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              >
                <option>Sales</option>
                <option>Executive</option>
                <option>HR</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Security</option>
                <option>Cleaning</option>
                <option>Customer Care</option>
                <option>Store</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="select"
                id="job_title"
                value={this.props?.editEmployeeData?.job_title}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.job_title = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              >
                <option>Jnr</option>
                <option>CEO</option>
                <option>Manager</option>
                <option>Sr</option>
                <option>Accountant</option>
                <option>Guard</option>
                <option>Consultant</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Salary</Label>
              <Input
                id="salary"
                value={this.props?.editEmployeeData?.salary}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.salary = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Date Employed</Label>
              <Input
                id="date_employed"
                value={this.props?.editEmployeeData?.date_employed}
                onChange={(e) => {
                  let { editEmployeeData } = this.props; // destructuring assignment
                  editEmployeeData.date_employed = e.target.value;
                  this.setState({ editEmployeeData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateRecord}>
              Update Record
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.props.toggleEditEmployeeModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditEmployeeModal;
