import React from 'react'
import './SearchBar.css'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
        return (
            <div className="search-bar">
                <input type="text"/>
                <AiOutlineSearch />
            </div>
        )
    }

export default SearchBar
