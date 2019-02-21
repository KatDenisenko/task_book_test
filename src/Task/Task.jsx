import React from 'react';
import './Task.css';
import {connect} from 'react-redux';
import edit from '../edit.svg'
import done from '../checked.svg'

const Task = ({email,id, text, username, admin, editTaskFunc,status}) => {
    return (
        
       
        <div className = "task">
        <div className = "imgWrapper">
        {admin?<img data-id = {id}  src={edit} alt="Edit icon" onClick={editTaskFunc}/>:null}
        {status?<img src={done} alt="Task done"/>:null}
        </div>
            <p className = "content">{username}</p>
            <p className = "content ">{email}</p> 
            <p className = "content" >{text}</p>
        </div>
    );
};

function MSTP (state) {
    return {
     admin:state.admin,
    }
  }
  
   export default connect(MSTP) (Task);

