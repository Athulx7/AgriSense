import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect, useRef } from "react"

function DropDownComponent({ labelName, important, Selected, dropdownList, getValue, disabledropdown }) {

    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [filteredList, setFilteredList] = useState(dropdownList)
    const inputRef = useRef(null)

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredList(dropdownList);
        } else {
            setFilteredList(
                dropdownList.filter((item) =>
                    item.text.toLowerCase().includes(search.toLowerCase())
                )
            )
        }
    }, [search, dropdownList])

    const selectedItem = dropdownList.find((d) => d.key === Selected)

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus()
        }
    }, [open])

    return (
        <div className="w-full">
            <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                {labelName} {important && <span className="text-red-500">*</span>}
            </label>

            <div className="relative">
                <div className={`w-full flex justify-between items-center px-3 py-2 border rounded-md text-sm dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-300
                    ${disabledropdown ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={() => !disabledropdown && setOpen(!open)}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={open ? search : selectedItem?.text || ""}
                        onChange={(e) => setSearch(e.target.value)}
                        disabled={!!disabledropdown}
                        placeholder="Select..."
                        className="flex-1 bg-transparent outline-none dark:text-gray-200 text-gray-800"
                    />
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-2 text-gray-500 dark:text-gray-400"
                    />
                </div>

                {open && (
                    <div className="absolute mt-1 w-full max-h-60 overflow-y-auto z-50 rounded-md shadow-lg border dark:border-gray-700 border-gray-200 dark:bg-gray-800 bg-white">
                        {filteredList.length > 0 ? (
                            filteredList.map((item) => (
                                <div
                                    key={item.key}
                                    onClick={() => {
                                        getValue(item.key);
                                        setOpen(false);
                                        setSearch("");
                                    }}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-green-100 hover:text-green-500 dark:hover:bg-green-700 border-l-4 border-transparent hover:border-green-600 
                                    ${Selected === item.key ? "bg-green-100 text-green-500 dark:text-green-400 border-green-700 dark:bg-green-700" : "text-gray-800 dark:text-white"}`}
                                >
                                    {item.text}
                                </div>
                            ))
                        ) : (
                            <div className="px-3 py-2 text-sm text-gray-500 dark:text-white">
                                No results found
                            </div>
                        )}

                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDownComponent
