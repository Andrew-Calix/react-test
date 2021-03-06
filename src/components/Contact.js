import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const {name , email , number} = this.props;
    return (
        <div className='card card-body mb-3'>
      <h4>{name}</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Email : {email}</li>
        <li className='list-group-item'>Phone : {number}</li>  
      </ul>
      </div>
    )
  }
}

export default Contact;