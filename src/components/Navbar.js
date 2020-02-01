import React, { Component } from 'react';
import './../Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>UrBit</li>
          <li>CAUSAS</li>
          <li>PRODUCTOS</li>
          <li>BLOG</li>
          <li>SOBRE NOSOTROS</li>
        </ul>

        <div className="search">
          <input type='text' placeholder="Animals"></input>
          <img src="./search.svg" />
        </div>

        <div className="icons">
          <img src="./avatar.png" alt="avatar" />
          <img src="./shopcart.png" alt="avatar" />
        </div>
      </nav>
    )
  }
}

export default Navbar;