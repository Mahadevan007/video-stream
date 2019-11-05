import axios from "axios";

const KEY = "AIzaSyCt_goTc2WSLhSZ0obB2YlUxcj3iaisoU8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
