import React from 'react'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './containers/dashboard/MainDashboard'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainDashboard />} />
      </Routes>
    </>
  )
}

export default App
