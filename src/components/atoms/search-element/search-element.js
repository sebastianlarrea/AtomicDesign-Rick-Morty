import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CryptoJS from 'crypto-js'
import './search-element.scss'

const SearchElement = ({ setData }) => {
    const [inputValue, setInputValue] = useState(null)
    const fullData = JSON.parse(
        CryptoJS.AES.decrypt(
            localStorage.getItem('full-data'),
            'rick-morty'
        ).toString(CryptoJS.enc.Utf8)
    )

    const filterState = () => {
        const searchFilter = inputValue.toLowerCase()
        const dataFiltered = fullData.filter(element =>
            element.name.toLowerCase().includes(searchFilter)
        )
        setData(dataFiltered)
    }

    return (
        <div className="search-element">
            <input
                className="search-element__input"
                type="text"
                placeholder="Buscar"
                onChange={event => setInputValue(event.target.value)}
            />
            <FontAwesomeIcon
                className="search-element__icon"
                icon={faSearch}
                onClick={filterState}
            />
        </div>
    )
}

export default SearchElement
