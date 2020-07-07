import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { helloAction } from '../actions';
import connectServer from '../api/connectServer';

interface Props {
  hello: number;
  helloAction: Function;
}

class Counter extends Component<Props> {
  componentDidMount() {
    this.props.helloAction();
    connectServer();
  }

  render() {
    return <div>{this.props.hello}</div>;
  }
}
const mapStateToProps = ({ hello }: StoreState): { hello: number } => ({
  hello,
});

const mapDispatchToProps = { helloAction };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
