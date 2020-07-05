import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { helloAction } from '../actions';

interface Props {
  hello: number;
  helloAction: Function;
}

class App extends Component<Props> {
  componentDidMount() {
    this.props.helloAction();
  }

  render() {
    return <div>{this.props.hello}</div>;
  }
}
const mapStateToProps = ({ hello }: StoreState): { hello: number } => ({
  hello,
});

const mapDispatchToProps = { helloAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
