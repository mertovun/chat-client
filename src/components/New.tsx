import React, { Component } from 'react';
import connectServer from '../api/connectServer';

interface Props {
  history: any;
}

class New extends Component<Props> {
  componentDidMount() {
    this.props.history.push('/asdfasdf');
    connectServer();
  }

  render() {
    return <div>New</div>;
  }
}

export default New;
