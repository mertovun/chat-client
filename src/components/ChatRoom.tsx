import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions/';
import { History } from 'history';

interface Props {
  history: History;
  joinRoom: Function;
}

class ChatRoom extends Component<Props> {
  componentDidMount() {
    this.props.joinRoom(this.props.history.location.pathname);
  }

  render() {
    return <div>ChatRoom</div>;
  }
}

export default connect(null, { joinRoom })(ChatRoom);
