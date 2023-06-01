import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const ActivityTable = () => {
  const [isChecked, setIsChecked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: true
  });

  const activities = [{ id: 100, name: 'reading' }, { id: 101, name: 'coding' }, { id: 200, name: 'eating' },]

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const getAllDaysInMonth = (month, year) =>
    Array.from(
      { length: new Date(year, month, 0).getDate() }, // get next month, zeroth's (previous) day
      (_, i) => new Date(year, month - 1, i + 1)    // get current month (0 based index)
    );

  const allDatesInMonth = getAllDaysInMonth(currentMonth, currentYear)

  const listOfCurrentDays = allDatesInMonth.map(x => x.toLocaleDateString([], { day: "numeric" }))

  //console.log(allDatesInMonth.map(x => x.toLocaleDateString([], { month: "short", day: "numeric" })))

  let listOfCurrentWeekDays

  if (currentDay >= 0 || currentDay < 8) {
    listOfCurrentWeekDays = listOfCurrentDays.slice(0, 7)
  } else if (currentDay > 7 || currentDay < 15) {
    listOfCurrentWeekDays = listOfCurrentDays.slice(7, 14)
  } else if (currentDay > 14 || currentDay < 22) {
    listOfCurrentWeekDays = listOfCurrentDays.slice(14, 21)
  } else if (currentDay > 21) {
    listOfCurrentWeekDays = listOfCurrentDays.slice(20, 31)
  }
  //const [isChecked, setIsChecked] = useState(Array(activities.length).fill(Array(listOfCurrentWeekDays.length).fill(false)));


  const setActivityHandler = (isChecked) => {
    console.log(isChecked)
    setIsChecked({
      first: isChecked,
      second: isChecked,
      third: isChecked,
      fourth: isChecked,
      fifth: isChecked,
      sixth: isChecked,
      seventh: isChecked
    })

    //https://www.youtube.com/watch?v=t7Vfu5pTm7Y
  }
  return (
    <>
      <Table striped >
        <thead>
          <tr>
            <th>Activities</th>
            {
              (listOfCurrentWeekDays).map(function (item, key) {
                return (

                  <th key={key}>

                    {item}

                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            (activities).map(function (item, activityKey) {
              return (
                <tr key={activityKey}>
                  <th>
                    {item.name}

                  </th>
                  <td>
                    <input type='checkbox' checked={isChecked.first} onChange={(e) => {
                      setIsChecked({ ...isChecked, first: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.second} onChange={(e) => {
                      setIsChecked({ ...isChecked, second: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.third} onChange={(e) => {
                      setIsChecked({ ...isChecked, third: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.fourth} onChange={(e) => {
                      setIsChecked({ ...isChecked, fourth: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.fifth} onChange={(e) => {
                      setIsChecked({ ...isChecked, fifth: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.sixth} onChange={(e) => {
                      setIsChecked({ ...isChecked, seventh: e.currentTarget.checked })
                    }}></input>
                  </td>
                  <td>
                    <input type='checkbox' checked={isChecked.seventh} onChange={(e) => {
                      setIsChecked({ ...isChecked, sixth: e.currentTarget.checked })
                    }}></input>
                  </td>

                </tr>
              )
            })
          }

        </tbody>
      </Table>
    </>
  )
}
export default ActivityTable