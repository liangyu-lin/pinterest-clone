import axios from 'axios';


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID GorGhq0MWteasncgEDdpjHnOM-7YxhVSCWeneEa6k-Y"
    }
})