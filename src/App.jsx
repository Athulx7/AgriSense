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
import MainExpenseTracker from './containers/expenseTracker/MainExpenseTracker'
import ExpensePverView from './Components/expenceTracker/ExpensePverView'
import ExpCategory from './Components/expenceTracker/ExpCategory'
import ExpReport from './Components/expenceTracker/ExpReport'
import MainMarketPrice from './containers/marketPrices/MainMarketPrice'
import PriceOverView from './Components/marketPrices/PriceOverView'
import MarketingTrends from './Components/marketPrices/MarketingTrends'
import MainAiAssistancePage from './containers/AIAsistance/MainAiAssistancePage'

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

        <Route path="/expense_traacker" element={<MainExpenseTracker />}>
          <Route path="expOverview" element={<ExpensePverView />} />
          <Route path="expCategory" element={<ExpCategory />} />
          <Route path="expReport" element={<ExpReport />} />
        </Route>

        <Route path="/market_prices" element={<MainMarketPrice />}>
          <Route path="priceOverview" element={<PriceOverView />} />
          <Route path="marketTrends" element={<MarketingTrends />} />
          <Route path="expReport" element={<ExpReport />} />
        </Route>


         <Route path="/AiAssistance" element={<MainAiAssistancePage />} />


      </Routes>
    </>
  )
}

export default App
