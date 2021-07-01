import React from 'react'
import './Header.css'
import logo from '../../assets/plant-logo.png'
import SearchBar from '../SearchBar/SearchBar'
import { GiHamburgerMenu } from 'react-icons/gi'

const menu = [
    { name: 'Top' },
    { name: 'Outdoor' },
    { name: 'Indoor' }
]

function Header() {
    return (
        <div className="header">

            <div className="header-left">
                <img src={logo} className="logo" alt="logo" />
                {menu.map(i => <a href="#">{i.name}</a>)}
                <SearchBar />
            </div>

            <div className="header-right">
                <GiHamburgerMenu size={30} className="hamburger"/>
            </div>

        </div>
    )
}

export default Header
