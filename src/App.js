import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import Account from './components/account';
import logo from './logo.svg';
import './App.css';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3002/graphql' });
const addTypename = false;

const client = new ApolloClient({
    networkInterface,
    addTypename
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Account id={1} />
        </div>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
