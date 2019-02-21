import {sortTasks} from '../api';

export const sortedTasks = (data) => ({
    type: 'SORTED_TASKS',
    payload:data,
})
export const skipSort = () => ({
    type: 'SKIP_SORT',
})

 export const sortData=(page,value)=>dispatch=> {
    return sortTasks(page,value).then(data=>dispatch(sortedTasks(data.data.message))).catch(err=>console.log(err))//dispatch запускает экшин addImg
}
