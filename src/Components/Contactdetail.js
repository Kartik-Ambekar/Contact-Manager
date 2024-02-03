import React from "react";
import { Link } from "react-router-dom";
import user from "Replace with image path"; //

const ContactDetail = (props) => {
    console.log(props);
    const { name, email } = props;
    return (
        <div className="main" style={{ marginTop: "15%" }}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue" style={{ margin: '20px auto', display: 'block' }}>Back to Contact List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;
