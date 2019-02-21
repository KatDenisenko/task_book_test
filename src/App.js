import React, { Component } from 'react';
import './App.css'
import {connect} from 'react-redux';
import {fetchData} from './redux/actions/getAction';
import {sortData} from './redux/actions/sortAction';
import {adminSignOut} from './redux/actions/adminAction';
import Task from './Task/Task';
import Modal from './Modal/Modal';
import Sort from './Sort/Sort';
import {Pagination} from 'semantic-ui-react';
import SignIn from './SignIn/SignIn';
import EditModal from './EditModal/EditModal';


class App extends Component {

  state={
    showModal:false,
    editTask:false,
    editedObject:null,
    activePage:1,
    showSignIn:false,
    options: [
      { key: 'userName', text: 'User name', value: 'username' },
      { key: 'email', text: 'Email', value: 'email' },
      { key: 'status', text: 'Status', value: 'status' },
    ],
    sortBy:''
  }

  showValue=(e)=>{
       
    let obj = this.state.options.find(el=>el.text===e.currentTarget.textContent)
    let sortBy =obj.value;
        this.setState({
            sortBy:sortBy,
        })
      }

  toggleModal=()=>{
    this.setState(prev=>({
      showModal:!prev.showModal,
    }))
  }
  toggleSignIn=()=>{
    this.setState(prev=>({
      showSignIn:!prev.showSignIn
    }))
  }
  toggleEditModal=()=>{
    this.setState(prev=>({
      editTask:!prev.editTask
    }))
  }

  handlePaginationChange = async(e, { activePage }) =>{
    await this.setState({ activePage })
    if (this.props.sortedTasks.tasks)
    {
      this.props.sortData(this.state.activePage, this.state.sortBy);
    }
    this.props.goToServer(this.state.activePage);
  }

  changeActivePage=(count)=>{
    let page='';
    if (count%3===0) {
      page = Math.ceil(count/3)+1
      this.setState({
        activePage:page
      })
    } else {
      this.setState({
        activePage:Math.ceil(count/3)
      })
    }
    
    // this.props.tasks.total_task_
  }

  editTaskFunc=(e)=>{
    // console.log(e.target.dataset.id);
    let idEdited=+e.target.dataset.id;
    let arr =[]
    if (this.props.sortedTasks.tasks) {
      arr=[...this.props.sortedTasks.tasks];
    }else {
      arr=[...this.props.tasks.tasks]
    }
    // console.log(arr);
    let editedObj = arr.find(el=>el.id===idEdited);
    this.setState ({
      editedObj:editedObj,
    })
    this.toggleEditModal();
    }

  componentDidMount() {
    this.props.goToServer(this.state.activePage);
  
     }

  render() {

    const {showModal, activePage,showSignIn, editTask}=this.state;

    return (
      <div>
      {showModal && <Modal changeActivePage = {this.changeActivePage} editedObj={this.state.editedObj} editTask = {this.state.editTask} toggleModal={this.toggleModal}/>}
      {editTask &&<EditModal toggleEditModal = {this.toggleEditModal} editedObj={this.state.editedObj}/>}
      {showSignIn&&<SignIn toggleSignIn={this.toggleSignIn}/>}
        <div className = "mainForm">
          <div className="userInfo">
              <p>You sign in like: {this.props.admin?'admin':'user'}</p>
              <p className = "signInRefer" onClick={this.props.admin? this.props.signOut:this.toggleSignIn}>
              {this.props.admin?'Sign out':'Sign in ...'}</p>
          </div>    
          <h3 className="taskBoardTitle">Task board</h3>
          <Sort activePage = {this.state.activePage} options = {this.state.options} showValue={this.showValue} sortBy = {this.state.sortBy}/>
                {
                this.props.sortedTasks.tasks?
                this.props.sortedTasks.tasks.map(el => 
                      <Task  editTaskFunc = {this.editTaskFunc} key = {el.id} email={el.email} text={el.text} id={el.id} status={+el.status} username = {el.username}/>
                    )
                : this.props.tasks.tasks?
                this.props.tasks.tasks.map(el => 
                  <Task editTaskFunc = {this.editTaskFunc} key = {el.id}email={el.email} text={el.text} id={el.id} status={+el.status} username = {el.username}/>
                )
                : null
                  }
          </div>
          <div className="pagination">
            {this.props.tasks.tasks&& 
            <Pagination 
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                totalPages={Math.ceil(this.props.tasks.total_task_count/3)}
              />}
          </div>
        
        <button className = "btn" type="submit" onClick = {this.toggleModal}>
        Add task</button>
      </div>
    )}
  }

function MSTP (state) {
  return {
    tasks:state.tasks,
    sortedTasks:state.sortedTasks,
    admin:state.admin,
  }
}

function MDTP (dispatch) {
  return {
      goToServer: function(page) {
          dispatch(fetchData(page))
      },
      sortData: function(value, page) {
        dispatch(sortData(value,page))
    },
    signOut: function(){
      dispatch(adminSignOut())
    }
}
}

 export default connect(MSTP, MDTP) (App);


