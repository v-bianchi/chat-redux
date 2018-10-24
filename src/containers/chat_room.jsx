import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MessageList from "./message_list";
import Input from "./input";

// import { setFlats } from "../actions";

class ChatRoom extends Component {

  componentWillMount() {
    // this.props.setFlats();
  }

  render() {
    return (
      <div className="col-xs-9">
        <div className="chat-room">
          <div className="chat-room__title">
            <h3>Channel title</h3>
          </div>
          <div className="chat-room__messages">
            <MessageList />
          </div>
          <div className="chat-room__input">
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

// export default ChatRoom;
export default connect(mapStateToProps, null)(ChatRoom);
