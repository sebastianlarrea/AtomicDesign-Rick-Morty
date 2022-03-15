import React from 'react'
import MenuNav from '../../molecules/menu-nav/menu-nav'
import SearchElement from '../../atoms/search-element/search-element'
import './header.scss'

const Header = props => {
    const { setData } = props
    const menuOptions = [
        {
            id: '1',
            text: 'Home',
            href: '/'
        },
        {
            id: '2',
            text: 'Characters',
            href: '/characters'
        },
        {
            id: '3',
            text: 'Locations',
            href: '/locations'
        },
        {
            id: '4',
            text: 'Episodes',
            href: '/episodes'
        }
    ]

    return (
        <header className="header">
            <h1 className="header__logo">Rick & Morty</h1>
            <MenuNav menuOptions={menuOptions} />
            <SearchElement setData={setData} />
        </header>
    )
}

export default Header
