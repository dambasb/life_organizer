import React, { useState } from 'react'

const ActivityRow = ({ title }) => {

  const [isChecked, setIsChecked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false
  });

  const setActivityHandler = (e) => {
    setIsChecked({ ...isChecked, first: e.currentTarget.checked })
  }

  return (
    <>
      <div className='grid'>
        <p>{title}</p>
        <input type='checkbox' checked={isChecked.first} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.second} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.third} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.fourth} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.fifth} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.sixth} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
        <input type='checkbox' checked={isChecked.seventh} onChange={(e) => {
          setActivityHandler(e)
        }}></input>
      </div>
    </>
  )
}
export default ActivityRow