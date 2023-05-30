import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5a71d1ce3016408c95517df5adcf9e5a'
    }
})