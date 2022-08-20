import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteTask } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import { updateTask } from '../Redux/Action'

function DisplayTask({ task }) {

    const [show, setShow] = useState(false);


    const [textUp, setUpdateTask] = useState('')

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleUpdateTask = (e) => {
        setUpdateTask(e.target.value)
    }

    const handleClose = () => {
      
        dispatch(updateTask(textUp, task.id))
        setShow(false)
    };

    const handleShow = () => setShow(true);
    const handleUpdate = () => {
        handleShow()
    }




    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{task.text}</Card.Title>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Update your task </Modal.Title>
                </Modal.Header>
                <Modal.Body><input style={{ border: 'none', outline: 'none' }} type='text' onChange={handleUpdateTask} /></Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default DisplayTask