import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ name: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ email: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let name = this.state.name.trim();
    if (!name || !email) {
      return;
    }
 
    this.setState({ email: '', name: '' });
       var apiBaseUrl = "http://localhost:3001/api";
    console.log("values",this.state.name,this.state.email);
    //To be done:check for empty values before hitting submit

    var payload={
    name: this.state.name,
    
    email:this.state.email
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
        console.log("registration successfull");
  
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  
  render() {
    return (
      <form  onSubmit={ this.handleSubmit }>
       
        <input
          type='text'
          placeholder='Your name...'
           
          value = {this.state.name}
          onChange={ this.handleAuthorChange } />
        <input
          type='email'
          placeholder='enter email'
         
          value={this.state.email}
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          
          value='Post'/>
      </form>
    )
  }
}

export default Form;