import axios from "axios";

// local
const protocol = "http";
const host = "localhost";
const port = "5000";

// live
// const protocol = "https";
// const host = "";
// const port = "";

const trailUrl = "api/v1";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/${trailUrl}/`;

const Axios = axios.create({
  baseURL: hostUrl,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${JSON.parse(localStorage?.getItem("token"))}`
      : "",
  },
});

export const generatePublicUrl = (fileName) => {
  return `${protocol}://${host}${port ? ":" + port : ""}/images${fileName}`;
};

export default Axios;
