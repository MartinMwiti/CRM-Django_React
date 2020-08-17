import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

// action
import {
  addEmployeeData,
  getEmployeeData,
} from "../../actions/employees/hr_data";

class AddEmployee extends Component {
  state = {
    name: "",
    phone_no: "",
    email: "",
    department: "",
    job_title: "",
    salary: "",
    validate: {
      emailState: "",
    },
    department_options: [
      "Sales",
      "Store",
      "Executive",
      "HR",
      "IT",
      "Finance",
      "Security",
      "Cleaning",
      "Customer Care",
    ],
    title_options: [
      "Jnr",
      "CEO",
      "Manager",
      "Sr",
      "Accountant",
      "Guard",
      "Consultant",
    ],
  };
  // intervalID;
  // componentDidMount() {
  //   // this.props.getEmployeeData();
  //   // this.intervalID = setInterval(this.props.getEmployeeData.bind(this), 2000);
  //   this.setState({
  //     department: this.state.department_options[0],
  //     job_title: this.state.title_options[0],
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.intervalID);
  // }

  componentDidMount() {
    this.setState({
      department: this.state.department_options[0],
      job_title: this.state.title_options[0],
    });
  }

  static propTypes = {
    addEmployeeData: PropTypes.func.isRequired,
    getEmployeeData: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, phone_no, email, department, job_title, salary } = this.state;
    const employee = {
      name,
      phone_no,
      email,
      department,
      job_title,
      salary,
    };
    this.props.addEmployeeData(employee);
    this.setState({
      name: "",
      phone_no: "",
      email: "",
      department: "",
      job_title: "",
      salary: "",
    });
    this.props.refreshRecords(); // call get func
    this.props.toggleModal(); // close modal
  };

  //EMAIL VALIDATION
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
    const { name, phone_no, email, department, job_title, salary } = this.state;
    return (
      <div className="App container">
        <Modal isOpen={this.props.modalState} scrollable={true}>
          <ModalHeader toggle={this.props.toggleModal}>
            New Employee
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Name</Label>
              <Input name="name" value={name} onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="title">Email</Label>
              <Input
                id="email"
                name="email"
                value={email}
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                onChange={(e) => {
                  this.validateEmail(e);
                  this.setState({
                    [e.target.name]: e.target.value,
                  });
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
                name="phone_no"
                value={phone_no}
                onChange={this.onChange}
              />
              <FormText>Your contact is the phone number.</FormText>
            </FormGroup>

            <FormGroup>
              <Label for="title">Department</Label>
              <Input
                placeholder="Department"
                type="select"
                name="department"
                id="department"
                value={department}
                onChange={this.onChange}
              >
                {this.state.department_options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="select"
                name="job_title"
                value={job_title}
                onChange={this.onChange}
              >
                {this.state.title_options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Salary</Label>
              <Input name="salary" value={salary} onChange={this.onChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button onClick={this.onSubmit} className="btn btn-primary">
              Submit
            </button>{" "}
            <Button color="secondary" onClick={this.props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addEmployeeData, getEmployeeData })(AddEmployee);
