import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function DarkModeTogle() {
    const [darkMode, SetDarkMode] = useState(() => localStorage.getItem("theme") === "dark")

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <button
            onClick={() => SetDarkMode((preview) => !preview)}
            className="p-2 rounded-full w-10 bg-green-50 hover:bg-green-100 cursor-pointer text-green-600"
        >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    )
}

export default DarkModeTogle
