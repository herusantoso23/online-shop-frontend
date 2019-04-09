import React from 'react';
 
const ContactCard = ({contact}) => {
     
    return(
        <div>
            <div className="col-xs-4 col-sm-3">
               {contact.photo !== undefined ?  <img src={contact.photo} alt={contact.name} className="img-fluid rounded-circle" /> :
                                         <img src="img/profile_img.png" alt ={contact.name} className="img-fluid rounded-circle" />}
            </div>
            <div className="col-xs-8 col-sm-9">
                <span className="name">{contact.name + ' ' + contact.surname}</span><br/>
                 
                {/* Some code omitted for brevity */}
                 
            </div>
          </div>
         
    )
}
 
export default ContactCard;