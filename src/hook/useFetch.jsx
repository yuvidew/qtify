import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (api) => {
    const [songs , setSongs] = useState([])
    const getSongs = async() => {
        try {
            const res = await axios.get(api)
            setSongs(res.data)
        } catch (error) {
            setSongs(null)
        }
    }

    useEffect(() => {
        getSongs()
    } , [api])

    return [songs , getSongs]
}

export default useFetch