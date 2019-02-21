export default function tasks (state={},action) {
    switch(action.type){

        case 'DOWNLOAD':
        return {...action.payload};//работаем с копией массива, не соригиналом.

        case 'ADD_TASK':
        let obj={}
        if (state.tasks.length===3)
        {
            obj ={
            tasks:[action.payload],
            total_task_count: +state.total_task_count+1,}
            return obj;
        } else {
             obj ={
                tasks:[...state.tasks,action.payload],
                total_task_count: +state.total_task_count+1,}
            return obj;
        }
        

        case 'EDDIT_TASK':
        if (action.data.status==='ok') {
            let editedTasks =state.tasks.map(el=>el.id===action.payload.id?el={...action.payload}:el)
            let editObj={
                tasks:editedTasks,
                total_task_count: state.total_task_count
            }
            return editObj;
        } else {
            return state;
        }   

        default:
            return state;
    }
}
