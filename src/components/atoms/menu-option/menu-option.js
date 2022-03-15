import React from 'react'
import './menu-option.scss'

const MenuOption = props => {
    const { optionText, optionHref } = props
    return (
        <li className="menu-option">
            <a className="menu-option__link " href={optionHref}>
                {optionText}
            </a>
        </li>
    )
}

export default MenuOption
