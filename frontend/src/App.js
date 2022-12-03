import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import ToDoScreen from './screens/ToDoScreen'

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<ToDoScreen />} exact />
          <Route path='/login' element={<LoginScreen />} exact />
        </Routes>
      </main>
    </Router>
  )
}

export default App
