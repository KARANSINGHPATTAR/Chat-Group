import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './css.css';
import User from './User'
import Chat from './Chat'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ['Adam','ABC','John','Alice'],
      data:[]
    };
  }

  share=(data,name)=>{
    this.state.data.push(name+': '+data)
    this.forceUpdate()
    {this.state.data.map((dat,i)=>{
          return console.log(data)
        })}
  }
  
  render() {
    return (
      <div >
      {this.state.name.map((nam,i)=>{
        return <User name={nam} send={this.share} chat={this.state.data} ></User> 
      })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
