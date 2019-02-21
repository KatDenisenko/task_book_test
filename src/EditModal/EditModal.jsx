import React, { Component } from 'react';
import Button from '../Button/Button.jsx'
import close from '../close.png'
import './EditModal.css';
import {editData} from '../redux/actions/getAction'
import {connect} from 'react-redux';


class EditModal extends Component {

    state={
        text: this.props.editedObj.text,
        status: this.props.editedObj.status,
        checked:null,
    }

    handleChange =(e)=>{
        let key = e.target.name;
        let value = e.target.value;
        this.setState({
            [key]:value,
        })
    }

    handleCheck=(e)=>{
    // console.log(e.target.checked);
    if (e.target.checked) {
        this.setState({
            status:10
        })
    } else {
        this.setState({
            status:0
        })
    }
    }
       editeData=(e)=>{
        e.preventDefault();
        let newTask={...this.props.editedObj,text:this.state.text,status:this.state.status}
        this.props.edite(newTask)
        this.props.toggleEditModal()
    }

    render() {
        return (
        
            <div className = "owerlay">
            <div className = "formWrapper">
                
                <img  src={close} alt="Close window" onClick={this.props.toggleEditModal}/>

                <form className= "modalForm" onSubmit = {this.editeData}>
                    <div>
                        <p className = "contentWrapper">{this.props.editedObj.username}</p>
                        
                    </div>
                    <div>
                        <p className = "contentWrapper">{this.props.editedObj.email}</p>
                        
                    </div>
                    <div>
                        <p className = "contentWrapper">Text</p>
                        <textarea className = "inputContent" type="text" name = "text" value = {this.state.text} onChange={this.handleChange} placeholder = "Enter text"/>
                    </div>
                    <div>
                        <p className = "contentWrapper">Done</p>
                        <input className = "inputContent" type="checkbox" name = "status" checked={this.state.status===+10?true:false} onChange={this.handleCheck}/>
                    </div>                                          
                    <Button text = 'Edit task' /> 
                </form>
            </div>
        </div>
            
        );
    }
}
function MDTP (dispatch) {
    return {
        edite: function(obj) {
            dispatch(editData(obj))
        }
  }
  }
  
   export default connect(null, MDTP) (EditModal);







