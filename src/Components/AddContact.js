import React from "react";
import {Link} from "react-router-dom";
 class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    };
    
    add  = (e) => {
        {/* 10 */}
        e.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert("Please fill all fields")
            return;
        }
        {/* 12 */}
        // console.log(this.state)
        this.props.addContacthandler(this.state);
        this.setState({name: "", email : ""});
        alert("Contact added Successfully! Go Back to View.");
        
        
        
    }
    render(){
        
        return(
            <div className="ui main"> {/* 3 */}
                <div style={{paddingTop:'5%'}}></div>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>{/* 9 */}
                    <div className="field">
                        <label>Name</label>
                        <input type = "text" name="name" placeholder="Name" 
                        value = {this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value})}/>
                        {/* 8 */}
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type = "text" name="email" placeholder="Email"
                        value = {this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div>
                        <button className="ui button blue">Add</button>
                        {/* <button style={{backgroundColor:'green',borderRadius:'10px',color:'white'}}>Add Contact</button> */}
                    </div>
                    
                </form>
               
                <div>
                <Link to = "/">
                    <button  className="ui button green" 
                    style={{marginTop:"10px"}}>Go Back</button>
                    </Link>
                </div>
                
            </div>
        );
    }
};

export default AddContact;