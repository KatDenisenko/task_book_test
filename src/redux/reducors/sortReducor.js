export default function sortedTasks (state={},action) {
    switch(action.type){
        case 'SORTED_TASKS':
        return {...action.payload};
        
        case 'SKIP_SORT':
        return {};
        
        default:
            return state;
    }
}