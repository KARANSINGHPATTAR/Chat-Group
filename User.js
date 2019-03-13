import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './css.css';
import Chat from './Chat'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      array:[]
    };
    this.myRef = React.createRef()
  }

  change=(e)=>{
  e.preventDefault()
  this.setState({ input: e.target.value });
  }

  click=(e)=>{
    e.preventDefault()
    this.state.array.push(this.state.input)
    this.props.send(this.state.input,props.name)
    this.myRef.current.value=''
  }

  render() {
    return (
      <div className='parent_div'>
      <div className='chat'>
        <div className='head'>{this.props.name}</div>
        {this.props.chat.map((dat,i)=>{
          if(dat.search(this.props.name)<0){
            return (<span >{dat}<br/></span>)
          }else{
            var res=dat.replace(this.props.name,'You')
            return (<span >{res}<br/></span>)
          }
        })}
      </div>
      <input onChange={this.change} type='text' className='textfield' ref={this.myRef} />
      <button onClick={this.click} className='input'>SEND</button>
      </div>
    );
  }
}

export default User
