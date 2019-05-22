import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { updateSearch } from "../../store/actions";
import "./Search.css";

interface DispatchProps {
  handleUpdateSearch: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: DispatchProps) => {
  return (
    <div className="search-wrapper">
      <i className="fas fa-search icon" aria-hidden={true} />
      <input
        type="text"
        className="search"
        onChange={props.handleUpdateSearch}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    handleUpdateSearch: (e: React.ChangeEvent<HTMLInputElement>): any => {
      let target = e.target as HTMLInputElement;
      dispatch(updateSearch(target.value));
    }
  };
};

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(Search);
