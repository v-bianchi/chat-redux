import React, { Component } from "react";

class Message extends Component {
  render() {
    const props = this.props;

    return (
      <div className="message">
        <p>
          <span className="message__author">
            {props.message.author}
          </span> ---
          {props.message.content} ---
          <span className="message__created-at">
            {props.message.created_at}
          </span>
        </p>
      </div>
    );
  }
}

export default Message;
