import React, { useState } from "react";
import { useDispatch } from "react-redux";
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


const AddInvoiceModal = (props) => {
  const [formData, setFormData] = useState({
    invoiceOwner: "",
    product: "",
    quantity: "",
    mode: "",
    status: "",
    payment_made: "",
  });

  const {
    invoiceOwner,
    product,
    quantity,
    mode,
    status,
    payment_made,
  } = formData;

  const dispatch = useDispatch(); 
   const { addInvoiceData } = props; 


    return (
      <div className="App container">
        <Modal isOpen={props.newInvoiceModal} scrollable={true}>
          <ModalHeader toggle={props.toggleModal}>Add Invoice</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Product</Label>
              <Input
                id="product"
                name="product"
                value={product}
                onChange={(e) => {
                  formData.product = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Name</Label>
              <Input
                id="name"
                name="invoiceOwner"
                value={invoiceOwner}
                onChange={(e) => {
                  formData.invoiceOwner = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for="title">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => {
                  formData.quantity = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Mode</Label>
              <Input
                id="mode"
                name="mode"
                value={mode}
                onChange={(e) => {
                  formData.mode = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Status</Label>
              <Input
                id="status"
                name="status"
                value={status}
                onChange={(e) => {
                  formData.status = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Paid</Label>
              <Input
                id="payment_made"
                name="payment_made"
                value={payment_made}
                onChange={(e) => {
                  formData.payment_made = e.target.value;
                  setFormData({ formData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>{" "}
            <Button color="secondary" onClick={props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default AddInvoiceModal;