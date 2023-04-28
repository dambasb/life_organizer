import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../actions/todoActions'

const TodoList = ({ data, progress }) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [deletedTodo, setDeletedTodo] = useState('');
  const [deletedTodoId, setDeletedTodoId] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let filteredData = []
  if (data !== undefined) {
    filteredData = Object.values(data).filter(item => item.progress === progress).map(filteredItems => (
      { filteredItems }
    ))
  }

  function reduceText(text, size) {
    return text.length > size ? text.slice(0, size - 1) + "_" : text
  }

  const reducedText = ''

  function deleteTodoData(todo, id) {
    setShow(true)
    setDeletedTodo(todo)
    setDeletedTodoId(id)
  }

  function deleteTodoHandler() {
    dispatch(deleteTodo(deletedTodoId))
  }

  function changeTodoProgressHandler(todo) {

    const changedProgres = progress === 'In Progress' ? 'Done' : 'In Progress'

    todo.progress = changedProgres
    dispatch(updateTodo(todo))
  }

  return (<>
    <h4>{progress}</h4>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete it?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{deletedTodo}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteTodoHandler}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal >

    {
      filteredData.length !== 0 ? (<ul>
        {
          (filteredData).map(function (item, key) {
            return (
              <li key={key}>
                {reduceText(item.filteredItems.text, 15)}
                {reducedText}
                <span className="todo__icons"><FontAwesomeIcon icon={faX} style={{ color: "#ff0000", }} onClick={e => deleteTodoData(item.filteredItems.text, item.filteredItems._id)} /></span>
                <span className="todo__icons"><FontAwesomeIcon icon={faCheck} style={{ color: "#0000ff", }} onClick={e => changeTodoProgressHandler(item.filteredItems)} /></span>

              </li>
            )
          })
        }
      </ul>) : (<p>No {progress} tasks.</p>)
    }
  </>)
}

TodoList.defaultProps = {
  progress: 'New'
}

export default TodoList
