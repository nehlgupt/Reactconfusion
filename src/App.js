import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent.js' ;
import { DISHES } from './shared/dishes';

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  */

function App() {
 
  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu  dishes={DISHES}/>
    

  </div>
  );
}

export default App;
