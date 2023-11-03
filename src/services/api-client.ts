import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '86c9e3d97736454a966c587d7a258d5d'
    }
});