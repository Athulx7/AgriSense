import React from 'react'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './containers/dashboard/MainDashboard'
import MainFarmProfile from './containers/farmProfile/MainFarmProfile'
import FarmOverview from './Components/farmProfile/FarmOverview'
import CropManagement from './Components/farmProfile/CropManagement'
import FieldMap from './Components/farmProfile/FieldMap'
import Settings from './Components/farmProfile/Settings'
import MainTaskPlanner from './containers/taskPlanner/MainTaskPlanner'
import TaskBoard from './Components/taskPlanner/TaskBoard'
import Calendar from './Components/taskPlanner/Calendar'
import Analytics from './Components/taskPlanner/Analytics'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainDashboard />} />

        <Route path="/farm_profile" element={<MainFarmProfile />}>
          <Route path="overview" element={<FarmOverview />} />
          <Route path="crops" element={<CropManagement />} />
          <Route path="map" element={<FieldMap />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/task_planner" element={<MainTaskPlanner />}>
          <Route path="taskboard" element={<TaskBoard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
