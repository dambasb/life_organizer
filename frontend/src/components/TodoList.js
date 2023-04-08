import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../actions/todoActions'


const TodoList = ({ data, progress }) => {

  const dispatch = useDispatch()


  let filteredData = []
  if (data !== undefined) {
    filteredData = Object.values(data).filter(item => item.progress === progress).map(filteredItems => (
      { filteredItems }
    ))
  }

  function deleteTodoHandler(id) {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteTodo(id))
    }
  }

  function changeTodoProgressHandler(todo) {

    const changedProgres = progress === 'In Progress' ? 'Done' : 'In Progress'

    console.log(todo.progress)
    todo.progress = changedProgres
    dispatch(updateTodo(todo))
  }

  return (<>
    <h4>{progress}</h4>

    {filteredData.length !== 0 ? (<ul>
      {
        (filteredData).map(function (item, key) {
          return (
            <li key={key}>
              {item.filteredItems.text}
              <span className="todo__icons"><FontAwesomeIcon icon={faX} style={{ color: "#ff0000", }} onClick={e => deleteTodoHandler(item.filteredItems._id)} /></span>
              <span className="todo__icons"><FontAwesomeIcon icon={faCheck} style={{ color: "#0000ff", }} onClick={e => changeTodoProgressHandler(item.filteredItems)} /></span>

            </li>
          )
        })
      }
    </ul>) : (<p>No {progress} tasks.</p>)}
  </>)
}

TodoList.defaultProps = {
  progress: 'New'
}

export default TodoList
