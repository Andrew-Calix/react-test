import { render } from '@testing-library/react';
import React, { Component } from 'react'

 class Contacts extends Component {
  state =    {
    contacts : [
        {
            id: 1 ,
            name: 'Monkey D Luffy',
            email: 'niku@gmail.com',
            phone: '555-555-5555'
        },
        {
            id: 2 ,
            name: 'Roronoa Zoro',
            email: 'katana@gmail.com',
            phone: '666-666-6666'
        },
        {
            id: 1 ,
            name: 'Kuroashi no Sanji',
            email: 'onna@gmail.com',    
            phone: '777-777-7777'
        }
       
    ] 
  }


render() {
    const { contacts } = this.state;

    return (
        <div>
            {contacts.map(contact => (
                <Contacts 
                name = {contact.name}
                email = {contact.email}
                phone = {contact.phone}
                />
            ))}
        </div>
    )
}
}
export default Contacts;
