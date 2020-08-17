import React, { Component } from "react";
import {
  Button,
  Label,
  Input,
  FormGroup,
  FormText,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class AddEmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validate: {
        emailState: "",
      },
    };
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  render() {
    return (
      <div className="App container">
        <Modal isOpen={this.props.newEmployeeModal} scrollable={true}>
          <ModalHeader toggle={this.props.toggleNewEmployeeModal}>
            Add New Employee
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Name</Label>
              <Input
                id="name"
                value={this.props?.newEmployeeData?.name}
                onChange={(e) => {
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.name = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Email</Label>
              <Input
                id="email"
                value={this.props?.newEmployeeData?.email}
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                onChange={(e) => {
                  this.validateEmail(e);
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.email = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              />
              <FormFeedback valid>
                That's a nice looking email you've got there.
              </FormFeedback>
              <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please
                input a correct email.
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="title">Contact</Label>
              <Input
                id="contact"
                value={this.props?.newEmployeeData?.phone_no}
                onChange={(e) => {
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.phone_no = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              />
              <FormText>Your contact is the phone number.</FormText>
            </FormGroup>

            <FormGroup>
              <Label for="title">Department</Label>
              <Input
                placeholder="Department"
                type="select"
                id="department"
                value={this.props?.newEmployeeData?.department}
                onChange={(e) => {
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.department = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              >
                <option></option>
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
                value={this.props?.newEmployeeData?.job_title}
                onChange={(e) => {
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.job_title = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              >
                <option></option>
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
                value={this.props?.newEmployeeData?.salary}
                onChange={(e) => {
                  let { newEmployeeData } = this.props; // destructuring assignment
                  newEmployeeData.salary = e.target.value;
                  this.setState({ newEmployeeData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.addEmployee}>
              Add Employee
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.props.toggleNewEmployeeModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddEmployeeModal;
