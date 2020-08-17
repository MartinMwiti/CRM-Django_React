import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from "@material-ui/core/Tooltip";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import styles from './LineItem.module.scss'


class LineItem extends Component {

  render = () => {

    const { index, name, description, quantity, price } = this.props

    return (
      <div className={styles.lineItem}>
        <div>{index + 1}</div>
        <div>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.props.changeHandler(index)}
          />
        </div>
        <div>
          <input
            name="description"
            type="text"
            value={description}
            onChange={this.props.changeHandler(index)}
          />
        </div>
        <div>
          <input
            name="quantity"
            type="number"
            step="1"
            value={quantity}
            onChange={this.props.changeHandler(index)}
            onFocus={this.props.focusHandler}
          />
        </div>
        <div className={styles.currency}>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0.00"
            max="9999999.99"
            value={price}
            onChange={this.props.changeHandler(index)}
            onFocus={this.props.focusHandler}
          />
        </div>
        <div className={styles.currency}>
          {this.props.currencyFormatter(quantity * price)}
        </div>
        <div>
          <Tooltip title="Delete">
            <DeleteOutlineIcon
              color="action"
              cursor='pointer'
              onClick={this.props.deleteHandler(index)}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default LineItem

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}


