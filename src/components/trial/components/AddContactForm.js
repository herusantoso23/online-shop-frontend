import React from 'react';
 
const AddContactForm = ({onInputChange, onFormSubmit}) => 
    (
    <form>
            <div className="form-group">
                <label htmlFor="emailAddress">Email address</label>
                <input type="email" class="form-control" name="email" onChange={onInputChange} placeholder="name@example.com" />
            </div>
             
        {/* Some code omitted for brevity */}
               
            <div className="form-group">
                <label htmlFor="physicalAddress">Address</label>
                <textarea className="form-control" name="address" onChange={onInputChange} rows="3"></textarea>
            </div>
 
            <button type="submit" onClick={onFormSubmit} class="btn btn-primary"> Submit </button>
        </form>
    )
 
export default AddContactForm;