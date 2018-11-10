import axios from "axios";

const instance = axios.create({
    baseURL:"https://multiplygame-7ec3e.firebaseio.com/"
});

export default instance;