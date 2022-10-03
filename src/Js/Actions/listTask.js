import {ADD_Task,DELETE_Task, DONE_TASK, EDIT_TASK } from "../ActionsTypes/listTask"


export const AddTask=(newTask)=> {
    return {
        type : ADD_Task,
        payload : newTask,
    }
}

export const deletTask=(id)=> {
    return {
        type : DELETE_Task,
        payload : id,
    }
}

export const doneTask = (id) => {
    return {
        type : DONE_TASK,
        payload : id,
    }
}

export const editTask = (id, newTask) => {
    return {
        type : EDIT_TASK,
        payload : { id, newTask },
    };
};