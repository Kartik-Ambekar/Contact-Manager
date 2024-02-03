import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "/Users/kartikambekar/Documents/React/Contact/contact-app/src/Components/ContactCard.js";
import { Router } from "react-router-dom";
const ContactList = (props) => {
    console.log(props);
  
    const deleteConactHandler = (id) => {
      props.getContactId(id);
    };
    // const contacts = [
    //   {
    //     id : 1,
    //     "name" : "kartik",
    //     "email" : "hello@gmail.com"
    // }
  //];
    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}
        />
      );
    });
    return <div className="ui celled list" style={{marginTop: "50px",}}>
      <div>
        <h1>Contact List 
          <Link to = "/add">
          <button className="ui button blue right" style={{marginLeft:"42%"}}>Add Contact</button>
          </Link>
          </h1>

        <p></p>
        </div>{renderContactList}</div>;
  };
  
  export default ContactList;


  