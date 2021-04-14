import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID Dc2NGWfat7tdJzGm-4d0XOvWxlEJ_eSzTTvZEQUshwU'
        }
    }
)