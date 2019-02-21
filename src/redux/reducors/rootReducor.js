import {combineReducers} from 'redux';
import tasks from './getReducor';
import sortedTasks from './sortReducor';
import admin from './adminReducor'

const rootReducers=combineReducers({
   tasks:tasks,
   sortedTasks:sortedTasks,
   admin:admin,

})
export default rootReducers;