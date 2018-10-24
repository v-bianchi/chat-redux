import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { setFlats } from "../actions";

class Input extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="message" placeholder="Type your message here"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ setFlats }, dispatch);
  return {};
}

// export default Input;
export default connect(null, mapDispatchToProps)(Input);
