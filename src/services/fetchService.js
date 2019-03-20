import axios from 'axios'

export const fetchData = async (page) => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
    return res.data
}


