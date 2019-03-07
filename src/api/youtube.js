import axios from 'axios';

const KEY = 'AIzaSyDNAF-yOyZP1z2wd-FK3xfChbaB0hKvZ88';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});
