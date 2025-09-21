import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faUser, faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import DarkModeTogle from './DarkModeTogle'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const navLinkClass = (path) => {
        const isActive = location.pathname === path || location.pathname.startsWith(path + "/")
        return `transition-colors ${isActive ? "text-green-600 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-green-600"}`
    }

    return (
        <header className="bg-white dark:bg-gray-900 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">

                    <NavLink to="/" className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faSeedling} className="h-6 w-6 text-green-600" />
                        <span className="text-xl font-bold text-green-600">Agrisense</span>
                    </NavLink>

                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className={navLinkClass("/")}>Dashboard</NavLink>
                        <NavLink to="/farm_profile/overview" className={navLinkClass("/farm_profile")}>Farm Profile</NavLink>
                        <NavLink to="/task_planner/taskboard" className={navLinkClass("/task_planner")}>Task Planner</NavLink>
                        <NavLink to="/expense_traacker/expOverview" className={navLinkClass("/expense_traacker")}>Expense Tracker</NavLink>
                        <NavLink to="/market_prices/priceOverview" className={navLinkClass("/market_prices")}>Market Prices</NavLink>
                        <NavLink to="/AiAssistance" className={navLinkClass("/AiAssistance")}>AI Assistant</NavLink>
                    </div>

                    <div className="flex items-center space-x-4">
                        <DarkModeTogle />

                        <button className="relative p-2 rounded-full w-10 bg-green-50 hover:bg-green-100 cursor-pointer">
                            <FontAwesomeIcon icon={faBell} className='text-green-600' />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </button>

                        <button className="p-2 rounded-full w-10 bg-green-50 hover:bg-green-100 cursor-pointer">
                            <FontAwesomeIcon icon={faUser} className='text-green-600' />
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-full w-10 bg-green-50 hover:bg-green-100 cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-3 border-t border-green-700">
                        <div className="flex flex-col space-y-3">
                            <NavLink to="/" className={navLinkClass("/")}>Dashboard</NavLink>
                            <NavLink to="/farm_profile/overview" className={navLinkClass("/farm_profile")}>Farm Profile</NavLink>
                            <NavLink to="/task_planner/taskboard" className={navLinkClass("/task_planner")}>Task Planner</NavLink>
                            <NavLink to="/expense_traacker/expOverview" className={navLinkClass("/expense_traacker")}>Expense Tracker</NavLink>
                            <NavLink to="/market_prices/priceOverview" className={navLinkClass("/market-prices")}>Market Prices</NavLink>
                            <NavLink to="/AiAssistance" className={navLinkClass("/AiAssistance")}>AI Assistant</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
