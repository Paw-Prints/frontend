import React from "react";
import PropTypes from "prop-types";

class NewComponent extends React.Component {
  state = {};

  render() {
    const { pet, generalbreeddata } = this.props.location.state;
    console.log(pet, generalbreeddata);

    return <div>hi</div>;
  }
}

export default NewComponent;
