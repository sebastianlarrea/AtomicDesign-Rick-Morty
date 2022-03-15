import axios from 'axios'

export const rickAndMortyApi = async path => {
    return axios.get(`https://rickandmortyapi.com/api${path}`).then(resp => {
        return resp?.status === 200 && resp?.data?.results
    })
}
