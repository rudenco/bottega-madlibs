import React, { Component } from 'react';

import Header from './header';
import Card from './card';
import Input from './input';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Botteg MadLibs')}    
       <Card />

      </div>
    );
  }
}

// Things needed to be fixed : 
// - placeholder
// - grey and green number labels
// - generate btn space/card-height
// - content labels 


export default Home;