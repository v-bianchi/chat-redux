import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setChannel } from "../actions";

class Channel extends Component {
  handleClick = () => {
    this.props.setChannel(this.props.channel)
  }

  render() {
    if (this.props.channel == this.props.selectedChannel) {
      return (
        <div className="channel">
          <h4 onClick={this.handleClick}><strong>#{this.props.channel}</strong></h4>
        </div>
      );
    } else {
      return (
        <div className="channel">
          <h4 onClick={this.handleClick}>#{this.props.channel}</h4>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannel }, dispatch);
}

// export default Channel;
export default connect(mapStateToProps, mapDispatchToProps)(Channel);
