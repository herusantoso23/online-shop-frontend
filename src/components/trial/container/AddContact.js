import React, {Component} from 'react';
import AddContactForm from '../components/AddContactForm'

class AddContact extends Component {
    constructor(props) {
        super(props);
         
        /* Function binding goes here. Omitted for brevity */
    }
 
    showAddContactBox() {
        /* Logic for toggling ContactForm */
    }
 
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
 
        /* Logic for handling Input Change */
 
    }
 
    handleSubmit(e) {
        e.preventDefault();
         
        /* Logic for hiding the form and update the state */
    }
     
    /* Renders the AddContactForm */
    renderForm() {
        return(
            <div className="col-sm-8 offset-sm-2">
                <AddContactForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
            </div>
        )
    }
    render() {
        return(
            <div>
                 
                { /* A conditional statement goes here that checks whether the form 
                    should be displayed or not */}
            </div>
            )
    }
}
 
 
export default AddContact;
