import { useState, useEffect, React } from 'react'
import ListTemplate from '../../components/templates/list-template/list-template'
import { rickAndMortyApi } from '../../services/rick-morty-api'
import CryptoJS from 'crypto-js'

const Characters = () => {
    const [data, setData] = useState(null)
    const [fullData, setFullData] = useState(null)
    const cardInfo = ['status', 'gender', 'species']

    useEffect(() => {
        const getData = async () => {
            const fetchResult = await rickAndMortyApi('/character')
            setData(fetchResult)
            setFullData(fetchResult)
        }
        getData()
    }, [])

    localStorage.setItem(
        'full-data',
        CryptoJS.AES.encrypt(JSON.stringify(fullData), 'rick-morty').toString()
    )
    return (
        <ListTemplate
            data={data}
            setData={setData}
            title="Characters"
            cardInfo={cardInfo}
        />
    )
}

export default Characters
