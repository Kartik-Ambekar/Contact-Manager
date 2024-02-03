import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4"; //install package if not already installed
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom"; //install package if not already installed
import { useHistory } from 'react-router-dom'; //install package if not already installed
import { nanoid } from "nanoid"; //install package if not already installed
import "Replace Text with path of App.js";
import Header from "Replace Text with path of Header.js";
import ContactList from "Replace Text with path of ContactList.js";
import AddContacts from "Replace Text with path of AddContact.js";
import ContactDetail from "Replace Text with path of Contactdetail.js";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  //   const contacts = [
  //     {
  //         id :'1',
  //         name:'name1',
  //         email: 'name1@gmail.com'
  //     },
  //     {
  //         id :'2',
  //         name:'name2',
  //         email: 'name2@gmail.com'
  //     }
  // ];
  {
    /* 7 */
  }
  const [contacts, setContacts] = useState([]);

  {
    /* 11 */
  }
  const addContacthandler = (contact) => {
    console.log(contact);
    //const ids = nanoid();
    //const generatedUUID = uuid();
    //console.log('Generated UUID:',ids);
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  const removeContactHander = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header /> {/* 1 */}
        <Routes>
          <Route
            path="/"
            // render = {(props) => (
            // <ContactList {...props} contacts = {contacts}
            //  getContactId = {removeContactHander}
            //  />
            //  )}
            Component={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHander}
              />
            )}
          />

          <Route
            path="/add"
            // render = {(props) => (
            // <AddContacts {...props} addContacthandler = {addContacthandler}/>)}
            Component={() => (
              <AddContacts addContacthandler={addContacthandler} />
            )}
          />
          <Route path="/contact/:id" Component={ContactDetail}/>
        </Routes>
        {/* <AddContacts addContacthandler = {addContacthandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHander} /> */}
      </Router>
    </div>
  );
}

export default App;
