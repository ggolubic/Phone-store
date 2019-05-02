import * as React from "react";
import "./App.css";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchDataThunk } from "./store/actions";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

interface DispatchProps {
  handleFetchData: () => void;
}

interface StateProps {
  modal: boolean;
}

type Props = StateProps & DispatchProps;
class App extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.handleFetchData();
  }

  public render() {
    return (
      <div className="app">
        <Header />
        <Home />
        {this.props.modal && <Modal />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleFetchData: (): any => dispatch<any>(fetchDataThunk())
  };
};

const mapStateToProps = (state: any) => ({
  modal: state.modalOpen
});

export default connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
