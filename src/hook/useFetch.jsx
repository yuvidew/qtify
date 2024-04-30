import axios from 'axios'

const useFetch = () => {
    const getSongs = async(api) => {
        try {
            const res = await axios.get(api)
            return res.data
        } catch (error) {
            return null
        }
    }

    return [ getSongs]
}

export default useFetch