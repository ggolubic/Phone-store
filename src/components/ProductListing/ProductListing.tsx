import * as React from "react";
import { data } from "../../store/reducers/productReducer";
import { Link } from "react-router-dom";

import "./ProductListing.css";

interface Props extends data {
  toggleCart: (id: number) => void;
  handleDetails: (id: number) => void;
  openModal: (id: number) => void;
}

const ProductListing = ({
  title,
  img,
  price,
  inCart,
  id,
  toggleCart,
  handleDetails,
  openModal
}: Props) => {
  return (
    <div className="listing">
      <div className="img-container" onClick={() => handleDetails(id)}>
        <Link to="/details">
          <img className="listing-img" src={img} />
        </Link>
        <button
          className="cart-btn"
          disabled={inCart}
          onClick={() => {
            toggleCart(id);
            openModal(id);
          }}
        >
          {inCart ? (
            <p className="in-cart no-cursor">Added</p>
          ) : (
            <i className="fas fa-shopping-cart" />
          )}
        </button>
      </div>

      <div className="listing-info">
        <h2 className="listing-title">{title}</h2>
        <h2 className="listing-price">{`$${price}`}</h2>
      </div>
    </div>
  );
};

export default ProductListing;
