import React, { Component } from 'react';
import Button from '../Button/Button.jsx'
import close from '../close.png'
import './Modal.css';
import {connect} from 'react-redux';
import {postData} from '../redux/actions/getAction';

class Modal extends Component {
state = {
    userName:'',
    email:'',
    text:'',
    status:'',
    editedTask:{}
}

handleChange =(e)=>{
    let key = e.target.name;
    let value = e.target.value;
    this.setState({
        [key]:value,
    })
}
postData =(e)=>{
    e.preventDefault();
    let regEx=/.+@.+\..+/i;
    if (!this.state.email.match(regEx)) {
        this.setState({
            email:''
        })
        // console.log("invalid email")
      }
    else {
    this.props.changeActivePage(this.props.tasks.total_task_count);
    console.log("you can post");
    this.props.postToServer(this.state.userName,this.state.email,this.state.text);
    this.props.toggleModal();
    

    }

        }

    render() {
        return (
        <div className = "owerlay">
            <div className = "formWrapper">
                <img  src={close} alt="Close window" onClick={this.props.toggleModal}/>
                <form className= "modalForm" onSubmit = {this.postData}>
                    <div>
                        <p className = "contentWrapper">User name</p>
                        <input className = "inputContent" type="text" name = "userName" value = {this.state.userName} onChange={this.handleChange} placeholder = "Enter user name" required/>
                    </div>
                    <div>
                        <p className = "contentWrapper">Email</p>
                        <input className = "inputContent" type="mail" name = "email" value = {this.state.email} onChange={this.handleChange} placeholder = "Enter your email" required/>
                    </div>
                    <div>
                        <p className = "contentWrapper">Text</p>
                        <textarea className = "inputContent" type="text" name = "text" value = {this.state.text} onChange={this.handleChange} placeholder = "Enter text" required/>
                    </div>
                    
                    
                            
                    <Button text = 'Save task'/> 
                   
                </form>
            </div>
        </div>
        );
    }
}

function MSTP (state) {
    return {
      tasks:state.tasks,
      sortedTasks:state.sortedTasks,
    }
  }

function MDTP (dispatch) {
    return {
        postToServer: function(userName, email,text) {
            dispatch(postData(userName, email,text))
        }
  }
  }
  
   export default connect(MSTP, MDTP) (Modal);





