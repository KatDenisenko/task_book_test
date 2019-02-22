import axios from 'axios';
import md5 from 'md5';


// export function obj (arr) {
//    return  arr[0].data.map(el=>({title:el.title,body:el.body, author: arr[2].data.find(item=>item.id===el.userId).name, comments:(arr[1].data.filter(item=>item.postId===el.id)).length }))
// }


export function getTasks(page) {
    return axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?page=${page}&developer=Kate.`)
}

export function sortTasks(page=1,value) {
    if (value==="status") {
        return axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?page=${page}&sort_field=${value}&sort_direction=desc&developer=Kate.`)
    }
    return axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?page=${page}&sort_field=${value}&developer=Kate.`)
}


export function postTask(userName, email,text) {

    let options = {
        method: 'POST'
     };
    options.body = new FormData();
    options.body.append("username",userName);
    options.body.append("email", email);
    options.body.append("text", text);

   return fetch(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=Kate.`, 
    options).then(data=>data.json());

}     
export function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

export function postEdit(obj) {
    
    const token="beejee";
    const allData = 
    fixedEncodeURIComponent("status") + "=" + 
    fixedEncodeURIComponent(+obj.status) + 
    "&" + fixedEncodeURIComponent("text") + "="+
    fixedEncodeURIComponent(obj.text) +
     "&" + fixedEncodeURIComponent("token") +"="+ 
     fixedEncodeURIComponent(token);

    const hash = md5(allData);
   
    const  fd = new FormData();
     fd.append("text", obj.text);
     fd.append("status", obj.status);
     fd.append("token","beejee");
     fd.append("signature",hash)

 
    const options = {
      method: "POST",
      body:fd
    };

    return fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/${+obj.id}?developer=Kate.`, options).then(data=>data.json())
    // .then(res=>console.log(res));
  }




// export default getTasks;