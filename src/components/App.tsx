import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';
import { helloAction } from '../actions';

interface Props {
  hello: string;
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
const mapStateToProps = ({ hello }: State) => ({ hello });

const mapDispatchToProps = { helloAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
