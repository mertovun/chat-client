import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions/';
import { sendMessage } from '../actions';
import { History } from 'history';

interface Props {
  history: History;
  joinRoom: Function;
  sendMessage: Function;
}

class ChatRoom extends Component<Props> {
  state = {
    message: '',
  };

  componentDidMount() {
    console.log(this.props.history.location.pathname);
    this.props.joinRoom(this.props.history.location.pathname);
  }
  handleSubmit = (e: any): void => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
  };
  handleInputChange = (e: any): void => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>ChatRoom</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { joinRoom, sendMessage })(ChatRoom);
