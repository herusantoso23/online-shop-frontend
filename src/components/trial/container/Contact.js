import React, {Component} from 'react';
import AddContact from '../components/AddContactForm';
import ContactList from '../components/ContactList';

class Contacts extends Component {
  
    constructor(props) {
        super(props);
        this.returnContactList = this.returnContactList.bind(this);
    }
    returnContactList() {
      // Retrieve contactlist from the store
    }
   
    render() {
      
      return (
          <div>
   
              <AddContact/>
              <br />
            <ContactList contactList= {this.returnContactList()} />
          </div>
      );
    }
  }
   
   
  export default Contacts;