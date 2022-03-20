import axios from 'axios'

export const rickAndMortyApi = path => {
    return axios.get(`https://rickandmortyapi.com/api${path}`)
}
