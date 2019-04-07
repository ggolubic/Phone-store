import * as React from "react";
import { data } from "../../data";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";

import { emptyCart } from "../../utility/images";
import "./Cart.css";
import {
  addToDetails,
  increaseCart,
  decreaseCart,
  removeCart
} from "src/store/actions";

interface DispatchProps {
  handleDetails: (item: data) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
}

interface StateProps {
  items: [data];
  subtotal: number;
  tax: number;
  total: number;
}

type Props = DispatchProps & StateProps;

class Cart extends React.Component<Props, {}> {
  render() {
    const {
      items,
      handleDetails,
      increment,
      decrement,
      remove,
      subtotal,
      tax,
      total
    } = this.props;
    if (items.length < 1) {
      return (
        <div className="container empty-cart">
          <img className="empty-cart-img" src={emptyCart} />

          <h3 className="sad-cart">Add something to make me happy :)</h3>
          <Link to="/">
            <button className="btn-black">Back to shopping</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="container">
        <h1 className="products">Your Cart</h1>
        <div className="cart-info">
          <ul>
            <li>Selected item(s)</li>
            <li>Unit price</li>
            <li>Quantity</li>
            <li>Remove</li>
            <li>Subtotal</li>
          </ul>
        </div>
        {items.map(item => {
          return (
            <div
              className="cart-item"
              key={item.id}
              onClick={() => handleDetails(item)}
            >
              <Link to="/details">
                <div className="cart-selected-item">
                  <img src={item.img} alt="product" className="cart-item-img" />
                  <span className="cart-title">{item.title}</span>
                </div>
              </Link>

              <span>{`$${item.price}`}</span>
              <div className="cart-change">
                <i
                  className={
                    item.count === 1
                      ? "fas fa-minus fa-disabled cart-reduce change-btn"
                      : "fas fa-minus cart-reduce change-btn"
                  }
                  onClick={() => decrement(item.id)}
                />
                <input type="text" className="cart-input" value={item.count} />
                <i
                  className="fas fa-plus cart-add change-btn"
                  onClick={() => increment(item.id)}
                />
              </div>
              <i className="fas fa-trash-alt" onClick={() => remove(item.id)} />
              <span>{`$${item.total}`}</span>
            </div>
          );
        })}
        <div className="checkout-container">
          <h3>Subtotal: ${subtotal}</h3>
          <h3>Tax (25%): ${tax}</h3>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart,
  subtotal: state.cartSubtotal,
  tax: state.cartTax,
  total: state.cartTotal
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleDetails: (product: data) => dispatch(addToDetails(product)),
  increment: (id: number) => dispatch(increaseCart(id)),
  decrement: (id: number) => dispatch(decreaseCart(id)),
  remove: (id: number) => dispatch(removeCart(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);