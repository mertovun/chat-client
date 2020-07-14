import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions/';
import { sendMessage } from '../actions';
import { History } from 'history';
import { StoreState } from '../reducers';
import { Room, Message } from '../reducers/roomReducer';

interface Props {
  history: History;
  room: Room;
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
    const message: Message = {
      userId: this.props.room.userId,
      msg: this.state.message,
      timestamp: null,
    };
    this.props.sendMessage(message);
    this.setState({ message: '' });
  };
  handleInputChange = (e: any): void => {
    this.setState({ message: e.target.value });
  };

  renderMessages() {
    const messages = this.props.room.messages;
    console.log(messages);
    return messages.map((msg, i) => (
      <li key={i}>
        <span></span> - <span></span> : {msg.msg}
      </li>
    ));
  }

  render() {
    return (
      <div style={{ width: '30%', height: '300px' }}>
        <h2>ChatRoom</h2>
        <div style={{ overflowY: 'scroll', height: '100%' }}>
          <ul style={{ listStyle: 'none' }}>{this.renderMessages()}</ul>
        </div>
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
const mapStateToProps = ({ room }: StoreState) => ({
  room,
});

export default connect(mapStateToProps, { joinRoom, sendMessage })(ChatRoom);
