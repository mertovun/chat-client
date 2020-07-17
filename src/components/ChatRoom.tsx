import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions/';
import { sendMessage } from '../actions';
import { History } from 'history';
import { StoreState } from '../reducers';
import { Room, Message } from '../reducers/roomReducer';
import { parseTime } from '../utils';

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
    if (this.state.message) {
      const message: Message = {
        userId: this.props.room.userId,
        msg: this.state.message,
        timestamp: null,
      };
      this.props.sendMessage(message);
      this.setState({ message: '' });
    }
  };

  handleInputChange = (e: any): void => {
    this.setState({ message: e.target.value });
  };

  renderSystemMsg = (msg: Message, i: number) => <li key={i}>{msg.msg}</li>;

  renderMsg = (msg: Message, i: number) => {
    const user = this.props.room.users[msg.userId];
    return (
      <li key={i}>
        <span
          style={{
            color: user.color,
            fontWeight: 'bold',
          }}
        >
          {user.nickname}
        </span>{' '}
        -{' '}
        <span>{msg.timestamp === null ? '...' : parseTime(msg.timestamp)}</span>{' '}
        : {msg.msg}
      </li>
    );
  };

  renderMessages() {
    const messages = this.props.room.messages;
    return messages.map((msg, i) =>
      msg.userId === 'system'
        ? this.renderSystemMsg(msg, i)
        : this.renderMsg(msg, i)
    );
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
