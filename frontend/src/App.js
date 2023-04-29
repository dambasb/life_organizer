import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AuthScreen from './screens/AuthScreen'
import ProfileScreen from './screens/ProfileScreen'
import ToDoScreen from './screens/ToDoScreen'
import ActivityScreen from './screens/ActivityScreen'

function App() {
  // Get url pathname to hide Header component on specific sites
  const urlPathname = window.location.pathname
  const pathname = urlPathname.replace('/', '')

  return (
    <Router>
      <main>
        {pathname !== 'login' && pathname !== 'register' && <Header />}

        <Routes>
          <Route path='/' element={<ActivityScreen />} exact />
          <Route path='/login' element={<AuthScreen />} exact />
          <Route path='/register' element={<AuthScreen />} exact />
          <Route path='/profile' element={<ProfileScreen />} exact />
          <Route path='/todo' element={<ToDoScreen />} exact />
          <Route path='/activity' element={<ActivityScreen />} exact />
        </Routes>
      </main>
    </Router>
  )
}

export default App
