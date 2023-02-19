import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AuthScreen from './screens/AuthScreen'
import ProfileScreen from './screens/ProfileScreen'
import ToDoScreen from './screens/ToDoScreen'

function App() {
  // Get url pathname to hide Header component on specific sites
  const urlPathname = window.location.pathname
  const pathname = urlPathname.replace('/', '')

  return (
    <Router>
      <main>
        {pathname !== 'login' && pathname !== 'register' && <Header />}

        <Routes>
          <Route path='/' element={<ToDoScreen />} exact />
          <Route path='/login' element={<AuthScreen />} exact />
          <Route path='/register' element={<AuthScreen />} exact />
          <Route path='/profile' element={<ProfileScreen />} exact />
        </Routes>
      </main>
    </Router>
  )
}

export default App
