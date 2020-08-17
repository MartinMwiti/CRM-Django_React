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

class EditProduct extends Component {
  render() {
    return (
      <div className="App container">
        <Modal isOpen={this.props.editProductModal} scrollable={true}>
          <ModalHeader toggle={this.props.toggleEditProduct}>
            Updating {this.props.editProductData.name} Record
          </ModalHeader>
          <ModalBody
          // style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
          >
            <FormGroup>
              <Label for="title">Name</Label>
              <Input
                name="name"
                value={this.props?.editProductData?.name}
                onChange={(e) => {
                  let { editProductData } = this.props; // destructuring assignment
                  editProductData.name = e.target.value;
                  this.setState({ editProductData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Description</Label>
              <Input
                value={this.props?.editProductData?.description}
                onChange={(e) => {
                  let { editProductData } = this.props; // destructuring assignment
                  editProductData.description = e.target.value;
                  this.setState({ editProductData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Category</Label>
              <Input
                value={this.props?.editProductData?.category}
                onChange={(e) => {
                  let { editProductData } = this.props; // destructuring assignment
                  editProductData.category = e.target.value;
                  this.setState({ editProductData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Quantity</Label>
              <Input
                type="select"
                value={this.props?.editProductData?.qty_amount}
                onChange={(e) => {
                  let { editProductData } = this.props; // destructuring assignment
                  editProductData.qty_amount = e.target.value;
                  this.setState({ editProductData });
                }}
              >
                <option>250ml</option>
                <option>500ml</option>
                <option>1L</option>
                <option>5L</option>
                <option>20L</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Price</Label>
              <Input
                value={this.props?.editProductData?.price}
                onChange={(e) => {
                  let { editProductData } = this.props; // destructuring assignment
                  editProductData.name = e.target.value;
                  this.setState({ editProductData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateRecord}>
              Update Record
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleEditProduct}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditProduct;
