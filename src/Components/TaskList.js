import React from 'react'
import DisplayTask from './DisplayTask'
import { useSelector } from 'react-redux'
import './TaskList.css'


function TaskList() {
    const initTask = useSelector(state => state)
    console.log(initTask)
    return (
        <div className='task'>
            {initTask.map(el => <DisplayTask key={el.id} task={el} />)}
        </div>
    )
}

export default TaskList