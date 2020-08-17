import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  Button,
  Label,
  Input,
  FormGroup,
  // FormText,
  // FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// action
import {
  addProductData,
} from "../../actions/products/productData";

class AddProducts extends Component {
  state = {
    name: "",
    // available: "",
    description: "",
    category: "",
    qty_amount: "",
    price: "",
    qty_options: [
      "250ml",
      "500ml",
      "1L",
      "5L",
      "20L",
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
      qty_amount: this.state.qty_options[0],
    });
  }

  static propTypes = {
    addProductData: PropTypes.func.isRequired,
    // getProductData: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      // available,
      description,
      category,
      qty_amount,
      price,
    } = this.state;
    const product = {
      name,
      // available,
      description,
      category,
      qty_amount,
      price,
    };
    this.props.addProductData(product); // action func
    this.setState({
      name: "",
      // available: "",
      description: "",
      category: "",
      qty_amount: "",
      price: "",
    });
    this.props.refreshRecords(); // call get func
    this.props.toggleModal(); // close modal
  };

  render() {
    const {
      name,
      // available,
      description,
      category,
      qty_amount,
      price,
    } = this.state;
    return (
      <div className="App container">
        <Modal isOpen={this.props.modalState} scrollable={true}>
          <ModalHeader toggle={this.props.toggleModal}>New Product</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Name</Label>
              <Input name="name" value={name} onChange={this.onChange} />
            </FormGroup>
            {/* <FormGroup>
              <Label for="title">Available</Label>
              <Input
                id="available"
                name="available"
                value={available}
                onChange={this.onChange}
              />
            </FormGroup> */}

            <FormGroup>
              <Label for="title">Description</Label>
              <Input
                name="description"
                id="description"
                value={description}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Category</Label>
              <Input
                name="category"
                value={category}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Quantity</Label>
              <Input
                type="select"
                name="qty_amount"
                value={qty_amount}
                onChange={this.onChange}
              >
                {this.state.qty_options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Price</Label>
              <Input name="price" value={price} onChange={this.onChange} />
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

export default connect(null, { addProductData })(AddProducts);
