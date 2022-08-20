import { Add_Task, Delete_Task, Update_Task, Done_Task } from "./Types";

export const addTask = (newTask) => {
    console.log('lance')
    console.log(newTask)
    return {
        type: Add_Task,
        payload: newTask

    }
}

export const deleteTask = (id) => {
    console.log('lance')
    console.log(id)
    return {
        type: Delete_Task,
        payload: id
    }
}


export const updateTask = (textUp, id) => {
    console.log(textUp, id)

    return {
        type: Update_Task,
        payload: { textUp, id }
    }
}



export const doneTask = () => {
    return {
        type: Done_Task
    }
}