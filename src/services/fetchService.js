import axios from 'axios'

export const fetchData = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    return res.data
}


