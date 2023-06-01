import React from 'react'

const ActivityRowHeader = ({ listOfCurrentWeekDays }) => {

  return (
    <>
      <div className='grid'>
        <span></span>
        {(listOfCurrentWeekDays).map(function (item, key) {
          return <span key={key}>{item}</span>
        })}
      </div>
    </>
  )
}
export default ActivityRowHeader