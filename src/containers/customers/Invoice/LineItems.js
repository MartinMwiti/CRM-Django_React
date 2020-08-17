import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import LineItem from './LineItem'
import styles from "./LineItems.module.scss";

import { green } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


class LineItems extends Component {

  handleDragEnd = (result) => {

    if (!result.destination) return

    // helper function to reorder result (src: react-beautiful-dnd docs)
    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)
      return result
    }

    // perform reorder
    const lineItems = reorder(
      this.props.items,
      result.source.index,
      result.destination.index
    )

    // call parent handler with new state representation
    this.props.reorderHandler(lineItems)

  }

  render = () => {

    const {items, addHandler, reorderHandler, ...functions} = this.props

    return (
      <form>
        <div className={styles.lineItems}>
          <div className={`${styles.gridTable}`}>
            <div className={`${styles.row} ${styles.header}`}>
              <div>#</div>
              <div>Item</div>
              <div>Description</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Total</div>
              <div></div>
            </div>

            <DragDropContext onDragEnd={this.handleDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className={
                      snapshot.isDraggingOver ? styles.listDraggingOver : ""
                    }
                  >
                    {this.props.items.map((item, i) => (
                      <Draggable key={item.id} draggableId={item.id} index={i}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            className={
                              snapshot.isDragging ? styles.listItemDragging : ""
                            }
                          >
                            <LineItem
                              style={{ color: "red" }}
                              key={i + item.id}
                              index={i}
                              name={item.name}
                              description={item.description}
                              quantity={item.quantity}
                              price={item.price}
                              {...functions}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          <div className={styles.addItem}>
            <Tooltip title="Add Item">
              <AddShoppingCartIcon
                style={{ color: green[500] }}
                onClick={addHandler}
                cursor="pointer"
                className={styles.addIcon}
              />
            </Tooltip>
          </div>
        </div>
      </form>
    );
  }
}

export default LineItems

LineItems.propTypes = {
  items: PropTypes.array.isRequired,
  currencyFormatter: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  reorderHandler: PropTypes.func.isRequired,
}


