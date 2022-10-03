//  1    importation

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Actionstypes/listTask"

// 2   initialstate
const initialstate = {
    listTasks : [
        {id : Math.random(), text : "task1" , isDone : false},
        {id : Math.random(), text : "task2" , isDone : false},

    ],
        //on a creer une base donnée statique contenant des id entre [] 
    //[] des données dans un tableau
    //Math.random() :nous donne un identifiant automatiquement 
};
  
//  3 pure function 

const listReduser = (state = initialstate , {type , payload}) => {
   switch(type){
        case ADD_TASK :
            return{...state, listTasks: [...state.listTasks, payload]};
//on spready 2 fois: 1 tab_state= initialstate {} ++++  2 tab_listTasks() []
        
        case DELETE_TASK :
            return{
                ...state, listTasks: state.listTasks.filter(el=>el.id !==payload)
            };    
//onfiltre les éléments qui on le id différent !== à payload   
        case DONE_TASK :
            return{
                ...state, 
                listTasks: state.listTasks.map((el)=>
                (el.id ===payload ? {...el, text: payload.newTask} : el))
            };    
            case EDIT_TASK :
            return{
                ...state, 
                listTasks: state.listTasks.map((el)=>
                (el.id ===payload ? {...el, isDone: !el.isDone} :el))
            };    
        default : return state 
   } 
};
  // 4   export
export default listReduser