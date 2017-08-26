import React, { Component } from 'react';
import './App.css';
import CardsList from './CardsList';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
      <CardsList/>
</BrowserRouter>
    );
  }
}

export default App;
