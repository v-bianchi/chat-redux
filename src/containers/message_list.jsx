import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { fetchMessages } from "../actions";

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    return (
      <div>
        {
          this.props.messages.map((message, index) => {
            return <Message key={message.content} message={message} tabIndex={index} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}


//export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
