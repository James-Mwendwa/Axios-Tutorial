import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
  

});


authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["ACCEPT"] = "application/json";
    console.log("request send");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log("response received");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);


export default authFetch;
