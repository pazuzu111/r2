import axios from 'axios'

export const fetchData = async (limit = 10) => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
    return res.data
}


