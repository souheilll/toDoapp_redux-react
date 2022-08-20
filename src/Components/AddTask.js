import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddTask.css';
import { addTask } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import TaskList from './TaskList';


function AddTask() {
    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState({ id: '', text: '', done: false })
    const handleChange = (e) => {
        setNewTask({ ...newTask, id: Math.random(), text: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(newTask))

        setNewTask({ id: '', text: '', done: false })
    }

    return (
        <div className='form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Enter your Task</Form.Label>
                    <Form.Control type="text" placeholder="add task" onChange={handleChange} value={newTask.text} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddTask