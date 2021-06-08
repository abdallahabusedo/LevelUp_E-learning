import axios from 'axios'
const KEY = 'AIzaSyAMKf1gf9pofpgD0-Cd_SbLTiM0Pp851Ak'
export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        key: KEY,
        part: "contentDetails"
    }
}
)

