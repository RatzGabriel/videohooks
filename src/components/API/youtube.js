import axios from "axios";

const KEY = "AIzaSyC8_klvF9JDUns4wWBAn5xw2_DnJ2oPxh0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
