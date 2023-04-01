import React from 'react'

const TodoList = ({ data, progress }) => {

  let filteredData = []
  if (data !== undefined) {
    filteredData = Object.values(data).filter(item => item.progress === progress).map(filteredItems => (
      { filteredItems }
    ))
  }

  return (<>
    <h4>{progress}</h4>

    {filteredData.length !== 0 ? (<ul>
      {
        (filteredData).map(function (item, key) {
          return (
            <li key={key}>
              {item.filteredItems.text}
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
