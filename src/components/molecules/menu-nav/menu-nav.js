import React from 'react'
import './menu-nav.scss'
import MenuOption from '../../atoms/menu-option/menu-option'

const MenuNav = props => {
    const { menuOptions } = props
    return (
        <ul className="menu-nav">
            {menuOptions.map(menuOption => {
                return (
                    <MenuOption
                        key={menuOption.id}
                        optionText={menuOption.text}
                        optionHref={menuOption.href}
                    />
                )
            })}
        </ul>
    )
}

export default MenuNav
