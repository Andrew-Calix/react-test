import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const {name , email , number} = this.props;
    return (
        <>
      <h4>{name}</h4>
      <ul>
        <li>Email : {email}</li>
        <li>Phone : {number}</li>  
      </ul>
      </>
    )
  }
}

export default Contact;