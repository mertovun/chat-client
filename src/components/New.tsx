import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../actions/';
import { History } from 'history';

interface Props {
  history: History;
  createRoom: Function;
}

class New extends Component<Props> {
  componentDidMount() {
    //this.props.history.push('/asdfasdf');
    this.props.createRoom(this.props.history);
  }

  render() {
    return null;
  }
}

export default connect(null, { createRoom })(New);
