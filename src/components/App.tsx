import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatRoom from './ChatRoom';
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
          <Route exact path="/new" component={New} />
          <Route path="/:id" component={ChatRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
