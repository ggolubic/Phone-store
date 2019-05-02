import * as React from "react";
import { connect } from "react-redux";
import { data } from "../../store/reducers/productReducer";
import { closeModal } from "src/store/actions";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import "./Modal.css";

interface Props {
  item: data;
  closeModal: () => void;
}

const Modal = ({ item, closeModal }: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <i className="fas fa-times close-icon" onClick={closeModal} />
        <h2 className="modal-title">Item Added To The Cart</h2>
        <img src={item.img} alt="product" className="modal-img" />
        <h2>{item.title}</h2>
        <h2 className="grey">Price: ${item.price}</h2>
        <div>
          <Link to="/cart">
            <button className="btn btn-cart" onClick={closeModal}>
              Go to Cart
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-back" onClick={closeModal}>
              Back to products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  item: state.modalDetails
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
