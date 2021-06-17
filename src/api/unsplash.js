import axios from 'axios';

   export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID cApa2RxFuqeNqZYXg0avKFzuOluH3CrfpvsEOqhpHao'
        }
    });