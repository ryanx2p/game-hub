import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2f68c64fc85a4182b05f3f6c35aefd08'
    }
})