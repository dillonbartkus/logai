import React from 'react'
import glass from '../images/magnifying-glass-icon.png'

export default function Searchbar({ setSearchTerm, searchTerm }) {

    return(

        <div className="search">

            <img src = {glass} alt = 'search' />

            <input
            onChange = { e => setSearchTerm(e.target.value) }
            className="searchbar" value = {searchTerm} placeholder = "Search product name or category...">
            </input>

        </div>
        
    )
}