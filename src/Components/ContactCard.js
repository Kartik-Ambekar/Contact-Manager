import React from "react";
import { Link } from "react-router-dom";
import user from "Insert the Image path here";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return( 
        <div className="item" style={{ position: 'relative' }}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content" style={{ marginLeft: '10px' }}>
                <Link to={{ pathname:`/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
                <i 
                    className='trash alternate outline icon' 
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'red' }} 
                    onClick={() => props.clickHander(id)}
                ></i>
            </div>
        </div>
    );
}

export default ContactCard;
