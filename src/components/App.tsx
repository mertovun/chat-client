import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { helloAction } from '../actions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import Counter from './Counter';
import New from './New';

interface Props {}

class App extends Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/new" component={New} />
          <Route path="/:id" component={ChatRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ hello }: StoreState): { hello: number } => ({
  hello,
});

const mapDispatchToProps = { helloAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
