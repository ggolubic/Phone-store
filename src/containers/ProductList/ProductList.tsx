import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addToCart, addToDetails, openModal } from "../../store/actions";
import { data } from "../../data";

import ProductListing from "../../components/ProductListing/ProductListing";
import "./ProductList.css";

interface props {
  data: [data];
}
interface dispatchProps {
  addToCart: (id: number) => void;
  addToDetails: (product: data) => void;
  openModal: (id: number) => void;
}
type Props = props & dispatchProps;

class ProductList extends React.Component<Props, {}> {
  getItem = (id: number) => {
    return this.props.data.find(item => item.id === id);
  };

  handleDetails = (id: number) => {
    const product = this.getItem(id);
    if (product !== undefined) {
      this.props.addToDetails(product);
    }
  };

  render() {
    return (
      <>
        <h1 className="products">Products</h1>
        <div className="product-list">
          {this.props.data.map((item: data) => (
            <ProductListing
              {...item}
              key={item.id}
              toggleCart={this.props.addToCart}
              handleDetails={this.handleDetails}
              openModal={this.props.openModal}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.phones
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (id: number) => dispatch(addToCart(id)),
  addToDetails: (product: data) => dispatch(addToDetails(product)),
  openModal: (id: number) => dispatch(openModal(id))
});

export default connect<props, dispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);