import {getTasks, postTask, postEdit} from '../api';

 export const allTasks = (data) => ({
     type: 'DOWNLOAD',
     payload:data,
 })

 export const addTask = (data) => ({
    type: 'ADD_TASK',
    payload:data,
})

export const editTask = (data,obj) => ({
    type: 'EDDIT_TASK',
    payload:obj,
    data:data,
})


 export const fetchData=(page)=>dispatch=> {
     return getTasks(page).then(data=>dispatch(allTasks(data.data.message))).catch(err=>console.log(err))
 }

 export const postData=(userName, email,text)=>dispatch=>{
     return postTask(userName,email,text).then(data=>dispatch(addTask(data.message))).catch(err=>console.log(err))
 }

 export const editData=(obj)=>dispatch=>{
     return postEdit(obj).then(data=>dispatch(editTask(data,obj))).catch(err=>console.log(err))
 }

