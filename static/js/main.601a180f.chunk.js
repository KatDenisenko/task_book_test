(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(t,e,a){t.exports=a.p+"static/media/edit.c4a18e05.svg"},167:function(t,e,a){t.exports=a.p+"static/media/checked.4b93446c.svg"},199:function(t,e,a){t.exports=a(371)},204:function(t,e,a){},207:function(t,e,a){},233:function(t,e,a){},234:function(t,e,a){},235:function(t,e,a){},236:function(t,e,a){},354:function(t,e,a){},356:function(t,e,a){},371:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(54),o=a.n(r),c=(a(204),a(63)),i=a(113),l=a.n(i),u=a(163),p=a(26),d=a(27),m=a(29),h=a(28),g=a(30),f=(a(207),a(20)),v=a(86),k=a.n(v),E=a(165),b=a.n(E);var y=function(t){return function(e){return function(t){return k.a.get("https://uxcandy.com/~shapoval/test-task-backend/?page=".concat(t,"&developer=Kate."))}(t).then(function(t){return e(function(t){return{type:"DOWNLOAD",payload:t}}(t.data.message))}).catch(function(t){return console.log(t)})}},A=function(t,e,a){return function(n){return function(t,e,a){var n={method:"POST"};return n.body=new FormData,n.body.append("username",t),n.body.append("email",e),n.body.append("text",a),fetch("https://uxcandy.com/~shapoval/test-task-backend/create?developer=Kate.",n).then(function(t){return t.json()})}(t,e,a).then(function(t){return n(function(t){return{type:"ADD_TASK",payload:t}}(t.message))}).catch(function(t){return console.log(t)})}},O=function(t){return function(e){return function(t){var e=encodeURIComponent("status")+"="+encodeURIComponent(+t.status)+"&"+encodeURIComponent("text")+"="+encodeURIComponent(t.text)+"&"+encodeURIComponent("token")+"="+encodeURIComponent("beejee"),a=b()(e),n=new FormData;n.append("text",t.text),n.append("status",t.status),n.append("token","beejee"),n.append("signature",a);var s={method:"POST",body:n};return fetch("https://uxcandy.com/~shapoval/test-task-backend/edit/".concat(+t.id,"?developer=Kate."),s).then(function(t){return t.json()})}(t).then(function(a){return e(function(t,e){return{type:"EDDIT_TASK",payload:e,data:t}}(a,t))}).catch(function(t){return console.log(t)})}},S=function(){return{type:"SKIP_SORT"}},j=function(t,e){return function(a){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return"status"===e?k.a.get("https://uxcandy.com/~shapoval/test-task-backend/?page=".concat(t,"&sort_field=").concat(e,"&sort_direction=desc&developer=Kate.")):k.a.get("https://uxcandy.com/~shapoval/test-task-backend/?page=".concat(t,"&sort_field=").concat(e,"&developer=Kate."))}(t,e).then(function(t){return a(function(t){return{type:"SORTED_TASKS",payload:t}}(t.data.message))}).catch(function(t){return console.log(t)})}},C=function(){return{type:"ADMIN"}},x=function(){return{type:"USER"}},T=(a(233),a(166)),w=a.n(T),N=a(167),I=a.n(N);var D=Object(f.b)(function(t){return{admin:t.admin}})(function(t){var e=t.email,a=t.id,n=t.text,r=t.username,o=t.admin,c=t.editTaskFunc,i=t.status;return s.a.createElement("div",{className:"task"},s.a.createElement("div",{className:"imgWrapper"},o?s.a.createElement("img",{"data-id":a,src:w.a,alt:"Edit icon",onClick:c}):null,i?s.a.createElement("img",{src:I.a,alt:"Task done"}):null),s.a.createElement("p",{className:"content"},r),s.a.createElement("p",{className:"content "},e),s.a.createElement("p",{className:"content"},n))}),P=a(36),M=(a(234),function(t){var e=t.text,a=t.func;return s.a.createElement("button",{className:"btn",type:"submit",onClick:a},e)}),K=a(81),_=a.n(K),W=(a(235),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={userName:"",email:"",text:"",status:"",editedTask:{}},a.handleChange=function(t){var e=t.target.name,n=t.target.value;a.setState(Object(P.a)({},e,n))},a.postData=function(t){t.preventDefault();a.state.email.match(/.+@.+\..+/i)?(a.props.changeActivePage(a.props.tasks.total_task_count),console.log("you can post"),a.props.postToServer(a.state.userName,a.state.email,a.state.text),a.props.toggleModal()):a.setState({email:""})},a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"owerlay"},s.a.createElement("div",{className:"formWrapper"},s.a.createElement("img",{src:_.a,alt:"Close window",onClick:this.props.toggleModal}),s.a.createElement("form",{className:"modalForm",onSubmit:this.postData},s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},"User name"),s.a.createElement("input",{className:"inputContent",type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,placeholder:"Enter user name",required:!0})),s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},"Email"),s.a.createElement("input",{className:"inputContent",type:"mail",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter your email",required:!0})),s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},"Text"),s.a.createElement("textarea",{className:"inputContent",type:"text",name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Enter text",required:!0})),s.a.createElement(M,{text:"Save task"}))))}}]),e}(n.Component));var R=Object(f.b)(function(t){return{tasks:t.tasks,sortedTasks:t.sortedTasks}},function(t){return{postToServer:function(e,a,n){t(A(e,a,n))}}})(W),U=a(380),F=a(381),B=a(372),q=(a(236),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).goToServerSort=function(){a.props.sortBy&&a.props.sortData(a.props.activePage,a.props.sortBy)},a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"sortStyle"},s.a.createElement(U.a,{type:"text",placeholder:"Sort...",action:!0},s.a.createElement(F.a,{compact:!0,options:this.props.options,defaultValue:"userName",onChange:this.props.showValue}),s.a.createElement(B.a,{type:"submit",onClick:this.goToServerSort},"Sort"),s.a.createElement(B.a,{type:"submit",onClick:this.props.skipSort},"Skip")))}}]),e}(n.Component));var V=Object(f.b)(null,function(t){return{sortData:function(e,a){t(j(e,a))},skipSort:function(){t(S())}}})(q),G=a(383),J=a(386),z=a(387),L=a(382),Q=a(385),Y=a(384),H=(a(354),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={password:"",login:"",error:""},a.handlerChange=function(t){a.setState(Object(P.a)({},t.target.name,t.target.value))},a.adminConfirm=function(){if("admin"===a.state.login&&"123"===a.state.password)a.props.adminSignIn(),a.props.toggleSignIn();else{a.setState({error:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438\u043b\u0438 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})}},a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"signInOwerlay"},s.a.createElement(J.a,{textAlign:"center",verticalAlign:"middle",className:"signInWrapper"},s.a.createElement(J.a.Column,{style:{maxWidth:450}},s.a.createElement(z.a,{as:"h2",icon:!0,color:"grey",textAlign:"center"},"Login task board"),s.a.createElement(L.a,{size:"large",onSubmit:this.adminConfirm},s.a.createElement(Q.a,null,s.a.createElement(L.a.Input,{fluid:!0,name:"login",icon:"user",iconPosition:"left",placeholder:"Enter login",type:"text",onChange:this.handlerChange,value:this.state.login,required:!0}),s.a.createElement(L.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handlerChange,value:this.state.password,required:!0}),s.a.createElement(B.a,{color:"grey",fluid:!0,size:"large"},"Submit"))),this.state.error.length>0&&s.a.createElement(Y.a,{error:!0},s.a.createElement("h3",null,"Error"),s.a.createElement("p",null,this.state.error),s.a.createElement(B.a,{onClick:this.props.toggleSignIn,color:"orange",fluid:!0,size:"small"},"Sign in like user")))))}}]),e}(n.Component));var X=Object(f.b)(null,function(t){return{adminSignIn:function(){t(C())}}})(H),Z=a(44),$=(a(356),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={text:a.props.editedObj.text,status:a.props.editedObj.status,checked:null},a.handleChange=function(t){var e=t.target.name,n=t.target.value;a.setState(Object(P.a)({},e,n))},a.handleCheck=function(t){t.target.checked?a.setState({status:10}):a.setState({status:0})},a.editeData=function(t){t.preventDefault();var e=Object(Z.a)({},a.props.editedObj,{text:a.state.text,status:a.state.status});a.props.edite(e),a.props.toggleEditModal()},a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"owerlay"},s.a.createElement("div",{className:"formWrapper"},s.a.createElement("img",{src:_.a,alt:"Close window",onClick:this.props.toggleEditModal}),s.a.createElement("form",{className:"modalForm",onSubmit:this.editeData},s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},this.props.editedObj.username)),s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},this.props.editedObj.email)),s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},"Text"),s.a.createElement("textarea",{className:"inputContent",type:"text",name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Enter text"})),s.a.createElement("div",null,s.a.createElement("p",{className:"contentWrapper"},"Done"),s.a.createElement("input",{className:"inputContent",type:"checkbox",name:"status",checked:10===this.state.status,onChange:this.handleCheck})),s.a.createElement(M,{text:"Edit task"}))))}}]),e}(n.Component));var tt=Object(f.b)(null,function(t){return{edite:function(e){t(O(e))}}})($),et=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={showModal:!1,editTask:!1,editedObject:null,activePage:1,showSignIn:!1,options:[{key:"userName",text:"User name",value:"username"},{key:"email",text:"Email",value:"email"},{key:"status",text:"Status",value:"status"}],sortBy:""},a.showValue=function(t){var e=a.state.options.find(function(e){return e.text===t.currentTarget.textContent}).value;a.setState({sortBy:e})},a.toggleModal=function(){a.setState(function(t){return{showModal:!t.showModal}})},a.toggleSignIn=function(){a.setState(function(t){return{showSignIn:!t.showSignIn}})},a.toggleEditModal=function(){a.setState(function(t){return{editTask:!t.editTask}})},a.handlePaginationChange=function(){var t=Object(u.a)(l.a.mark(function t(e,n){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.activePage,t.next=3,a.setState({activePage:s});case 3:a.props.sortedTasks.tasks&&a.props.sortData(a.state.activePage,a.state.sortBy),a.props.goToServer(a.state.activePage);case 5:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),a.changeActivePage=function(t){var e="";t%3===0?(e=Math.ceil(t/3)+1,a.setState({activePage:e})):a.setState({activePage:Math.ceil(t/3)})},a.editTaskFunc=function(t){var e=+t.target.dataset.id,n=(a.props.sortedTasks.tasks?Object(c.a)(a.props.sortedTasks.tasks):Object(c.a)(a.props.tasks.tasks)).find(function(t){return t.id===e});a.setState({editedObj:n}),a.toggleEditModal()},a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.props.goToServer(this.state.activePage)}},{key:"render",value:function(){var t=this,e=this.state,a=e.showModal,n=e.activePage,r=e.showSignIn,o=e.editTask;return s.a.createElement("div",null,a&&s.a.createElement(R,{changeActivePage:this.changeActivePage,editedObj:this.state.editedObj,editTask:this.state.editTask,toggleModal:this.toggleModal}),o&&s.a.createElement(tt,{toggleEditModal:this.toggleEditModal,editedObj:this.state.editedObj}),r&&s.a.createElement(X,{toggleSignIn:this.toggleSignIn}),s.a.createElement("div",{className:"mainForm"},s.a.createElement("div",{className:"userInfo"},s.a.createElement("p",null,"You sign in like: ",this.props.admin?"admin":"user"),s.a.createElement("p",{className:"signInRefer",onClick:this.props.admin?this.props.signOut:this.toggleSignIn},this.props.admin?"Sign out":"Sign in ...")),s.a.createElement("h3",{className:"taskBoardTitle"},"Task board"),s.a.createElement(V,{activePage:this.state.activePage,options:this.state.options,showValue:this.showValue,sortBy:this.state.sortBy}),this.props.sortedTasks.tasks?this.props.sortedTasks.tasks.map(function(e){return s.a.createElement(D,{editTaskFunc:t.editTaskFunc,key:e.id,email:e.email,text:e.text,id:e.id,status:+e.status,username:e.username})}):this.props.tasks.tasks?this.props.tasks.tasks.map(function(e){return s.a.createElement(D,{editTaskFunc:t.editTaskFunc,key:e.id,email:e.email,text:e.text,id:e.id,status:+e.status,username:e.username})}):null),s.a.createElement("div",{className:"pagination"},this.props.tasks.tasks&&s.a.createElement(G.a,{activePage:n,onPageChange:this.handlePaginationChange,totalPages:Math.ceil(this.props.tasks.total_task_count/3)})),s.a.createElement("button",{className:"btn",type:"submit",onClick:this.toggleModal},"Add task"))}}]),e}(n.Component);var at=Object(f.b)(function(t){return{tasks:t.tasks,sortedTasks:t.sortedTasks,admin:t.admin}},function(t){return{goToServer:function(e){t(y(e))},sortData:function(e,a){t(j(e,a))},signOut:function(){t(x())}}})(et);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(370);var nt=a(37);var st=Object(nt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DOWNLOAD":return Object(Z.a)({},e.payload);case"ADD_TASK":return 3===t.tasks.length?{tasks:[e.payload],total_task_count:+t.total_task_count+1}:{tasks:[].concat(Object(c.a)(t.tasks),[e.payload]),total_task_count:+t.total_task_count+1};case"EDDIT_TASK":return"ok"===e.data.status?{tasks:t.tasks.map(function(t){return t.id===e.payload.id?t=Object(Z.a)({},e.payload):t}),total_task_count:t.total_task_count}:t;default:return t}},sortedTasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SORTED_TASKS":return Object(Z.a)({},e.payload);case"SKIP_SORT":return{};default:return t}},admin:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"ADMIN":return!0;case"USER":return!1;default:return t}}}),rt=a(186),ot=Object(nt.e)(st,Object(nt.d)(Object(nt.a)(rt.a)));o.a.render(s.a.createElement(f.a,{store:ot},s.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},81:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAalAAAGpQEXmZfdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADNQTFRF////zGYz3F1G1VpK1lhL1llL11pK11pK11pK11lK11pK11pK11pK33pt4IF1++/u/PPyIScm+QAAAAx0Uk5TAAUWMEtqf4Cy0Ob69Vq7RgAAAIRJREFUKM91kkkSwyAMBIfFMsuY+P+vzQECJPH0haoWJYEkoOOjpVKSRY8dd1YOqrnlQ+ZGDh9/VH5Rj3H/x5M1AIDL/CM7ACcfMMD3RFfrpl09mUcc4tW2g4wwbpHpaUhckeWZUGbBdt/Ts+iATCWLy+fKD8qW6CbKtutB6dHqZXhanzfOwBUpdF0PfgAAAABJRU5ErkJggg=="}},[[199,1,2]]]);
//# sourceMappingURL=main.601a180f.chunk.js.map