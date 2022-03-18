import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8080/v1/',
});

axios.interceptors.request.use(
    (config) => {
        // const token = window.localStorage.getItem("token");
        // if (token) {
        //     config.headers["authToken"] = token;
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

// function deleteSession() {
//     const event = new Event("forceLogout");
//     window.dispatchEvent(event);
//     alertDanger("Your session is expired, please login again")
// }

// axios.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;
//         if (originalConfig.url !== "user/login" && err.response) {
//             if (err.response.status === 401 && !originalConfig._retry) {
//                 // originalConfig._retry = true;
//                 deleteSession()
//                 // try {
//                 //
//                 //     // deleteSession();
//                 // } catch (_error) {
//                 //     // deleteSession();
//                 //     return Promise.reject(_error);
//                 // }
//             }
//         }
//         return Promise.reject(err);
//     }
// );

export default axios;