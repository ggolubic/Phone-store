import * as React from "react";
import { connect } from "react-redux";
import { addToCart, openModal } from "../../store/actions";
import { data } from "../../data";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";

import "./Details.css";

interface Props {
  addToCart: (id: number) => void;
  productDetails: data;
  openModal: (id: number) => void;
}

class Details extends React.Component<Props, {}> {
  render() {
    const {
      title,
      img,
      price,
      company,
      info,
      id,
      inCart
    } = this.props.productDetails;
    return (
      <div className="container">
        <h1 className="details-title">{title}</h1>
        <div className="grid-container">
          <div className="left-col">
            <img src={img} alt="product" />
          </div>
          <div className="right-col">
            <p>
              Price: <span>{`${price}$`}</span>
            </p>
            <p>
              Made by: <span>{company}</span>
            </p>
            <p className="details-info">{info}</p>
            <button
              className="btn btn-cart"
              disabled={inCart}
              onClick={() => {
                this.props.addToCart(id);
                this.props.openModal(id);
              }}
            >
              {inCart === true ? `Added to cart` : `Add to Cart`}
            </button>
            <Link to="/">
              <button className="btn btn-back">Back to products</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  productDetails: state.productDetails
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (id: number) => dispatch(addToCart(id)),
  openModal: (id: number) => dispatch(openModal(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
