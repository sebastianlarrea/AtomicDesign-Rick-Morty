import { useState, useEffect, React } from 'react'
import ListTemplate from '../../components/templates/list-template/list-template'
import { rickAndMortyApi } from '../../services/rick-morty-api'
import CryptoJS from 'crypto-js'

const Locations = () => {
    const [data, setData] = useState(null)
    const [fullData, setFullData] = useState(null)
    const cardInfo = ['type', 'dimension']
    localStorage.setItem(
        'full-data',
        CryptoJS.AES.encrypt(JSON.stringify(fullData), 'rick-morty').toString()
    )
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const fetchResult = await rickAndMortyApi('/location')
        setData(fetchResult)
        setFullData(fetchResult)
    }
    return (
        <ListTemplate
            data={data}
            setData={setData}
            title="Locations"
            cardInfo={cardInfo}
        />
    )
}

export default Locations
