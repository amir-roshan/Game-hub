import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bdbe400d85884216ac0d10a4f0a4a54c'
    }
});