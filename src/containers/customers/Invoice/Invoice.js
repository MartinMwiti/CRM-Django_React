import React, { Component } from 'react'
import styles from './Invoice.module.scss'

import LineItems from './LineItems'

const { v4: uuidv4 } = require("uuid");

class Invoice extends Component {

  locale = 'en-US'
  currency = 'Ksh'

  state = {
    taxRate: 0.00,
    lineItems: [
      {
        id: 'initial',      // react-beautiful-dnd unique key
        name: '',
        description: '',
        quantity: 0,
        price: 0.00,
      },
    ]
  }

  handleInvoiceChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({lineItems})
  }

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat(
        [{ id: uuidv4(), name: '', description: '', quantity: 0, price: 0.00 }]
      )
    })
  }

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i
      })
    })
  }

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    })
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  handlePayButtonClick = () => {
    alert('Not implemented')
  }

  formatCurrency = (amount) => {
    return (new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount))
  }

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100)
  }

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
  }

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100)
  }

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal()
  }

  render = () => {
    return (
      <div className={styles.invoice}>
        <div className={styles.brand}>
          <img
            src="https://via.placeholder.com/150x50.png?text=logo"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.addresses}>
          <div className={styles.from}>
            <strong>Carrerfour</strong>
            <br />
            Thika Road Mall
            <br />
            PO. Box ****-*** Nairobi.
            <br />
            0800 221 322
          </div>
          <div>
            <div className={`${styles.valueTable} ${styles.to}`}>
              <div className={styles.row}>
                <div className={styles.label}>Customer Name:</div>
                <div className={styles.value}>Carrerfour</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Invoice Number:</div>
                <div className={styles.value}>INV-0060</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Purchase Date:</div>
                <div className={`${styles.value} ${styles.date}`}>
                  2020-08-08
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <h2>Invoice</h2>

          <LineItems
            items={this.state.lineItems}
            currencyFormatter={this.formatCurrency}
            addHandler={this.handleAddLineItem}
            changeHandler={this.handleLineItemChange}
            focusHandler={this.handleFocusSelect}
            deleteHandler={this.handleRemoveLineItem}
            reorderHandler={this.handleReorderLineItems}
          />
        </div>

        <div className={styles.totalContainer}>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Tax Rate (%)</div>
                <div className={styles.value}>
                  <input
                    name="taxRate"
                    type="number"
                    step="0.01"
                    value={this.state.taxRate}
                    onChange={this.handleInvoiceChange}
                    onFocus={this.handleFocusSelect}
                  />
                </div>
              </div>
            </div>
          </form>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Subtotal</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcLineItemsTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Tax ({this.state.taxRate}%)</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcTaxTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Total Due</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcGrandTotal())}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.pay}>
          <button className={styles.payNow} onClick={this.handlePayButtonClick}>
            Pay Now
          </button>
        </div>

        <div className={styles.footer}>
          <div className={styles.closing}>
            <div>Thank-you for your business</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Invoice
