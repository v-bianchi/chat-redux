import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createMessage } from "../actions";

class Input extends Component {

  componentWillMount() {
    this.setState({value: ''});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.currentUsername, this.state.value);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" name="message" onChange={this.handleChange}/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channel: state.selectedChannel,
    currentUsername: state.currentUsername
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

// export default Input;
export default connect(mapStateToProps, mapDispatchToProps)(Input);
