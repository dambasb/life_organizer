import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ActivityRow from '../components/ActivityRow';
import ActivityRowHeader from '../components/ActivityRowHeader';

function ActivityScreen() {

  const activities = ['reading', 'coding', 'eating']

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date();
  const monthName = month[date.getMonth()];

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

  return (
    <Container>
      <Row>
        <Col>
          <h2 className='screen__title'>Activity</h2>
        </Col>
        <Col>
          <h4 className='screen__month'>{monthName}</h4>
        </Col>
      </Row>
      <ActivityRowHeader listOfCurrentWeekDays={listOfCurrentWeekDays}></ActivityRowHeader>
      {(activities).map(function (item, key) {
        return (

          <ActivityRow title={item} key={key}></ActivityRow>

        )



      })}

    </Container >
  )
}

export default ActivityScreen