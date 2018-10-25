import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Channel from '../containers/channel';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list col-xs-3">
        <h1>Redux Chat</h1>
          {this.props.channels.map((channel, index) => {
            return <Channel key={index} channel={channel} tabIndex={index} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

// export default ChannelList;
export default connect(mapStateToProps, null)(ChannelList);
