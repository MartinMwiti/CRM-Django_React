import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types' 

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
  addInvoiceData,
} from "../../actions/customers/invoice"; 


class FormInvoice extends Component {
  state = {
    invoiceOwner: "",
    product: "",
    quantity: "",
    mode: "",
    status: "",
    payment_made: "",
    payment_options: ["Mpesa", "Cash", "Bank", "Cheque"],
    status_options: ["Paid", "Pending", "Delivered"],
  };

  componentDidMount() {
    this.setState({
      mode: this.state.payment_options[0],
      status: this.state.status_options[0],
    });
  }

  static propTypes = {
    addInvoiceData: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      invoiceOwner,
      product,
      quantity,
      mode,
      status,
      payment_made,
    } = this.state;
    const invoice = {
      invoiceOwner,
      product,
      quantity,
      mode,
      status,
      payment_made,
    };
    this.props.addInvoiceData(invoice);
    this.setState({
      invoiceOwner: "",
      product: "",
      quantity: "",
      mode: "",
      status: "",
      payment_made: "",
    });
    this.props.toggleModal(); // close modal
    this.props.getInvoiceData(); // call get func
  };
  render() {
    const {
      invoiceOwner,
      product,
      quantity,
      mode,
      status,
      payment_made,
    } = this.state;
    return (
      <div className="App container">
        <Modal isOpen={this.props.newInvoiceModal} scrollable={true}>
          <ModalHeader toggle={this.props.toggleModal}>Add Invoice</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Name</Label>
              <Input
                placeholder="Name"
                name="invoiceOwner"
                value={invoiceOwner}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Product</Label>
              <Input
                placeholder="Product name"
                name="product"
                value={product}
                onChange={this.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="title">Quantity</Label>
              <Input
                placeholder="Quantity Amount"
                type="number"
                min="1"
                name="quantity"
                value={quantity}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Mode</Label>
              <Input
                type="select"
                name="mode"
                value={mode}
                onChange={this.onChange}
              >
                {this.state.payment_options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Status</Label>
              <Input
                type="select"
                name="status"
                value={status}
                onChange={this.onChange}
              >
                {this.state.status_options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="title">Amount Paid</Label>
              <Input
                type="number"
                min="0.00"
                placeholder="Amount"
                name="payment_made"
                value={payment_made}
                onChange={this.onChange}
              />
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

export default connect(null, { addInvoiceData })(FormInvoice);