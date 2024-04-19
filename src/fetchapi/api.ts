import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   withCredentials: true,
});

// Handle all configuration of request
api.interceptors.request.use(
  (config: any) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = localStorage.getItem("token");
    //     config.headers["lang"] = localStorage.getItem("i18nextLng");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle errors of all responses
api.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err?.message === "Network Error") {
      return Promise.reject(null);
    }
    return Promise.reject(err.response?.data);
  }
);

// Determine the percentage of uploading
export const apiProgress = (
  progressEvent: any,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) => {
  let percentCompleted = Math.floor(
    (progressEvent.loaded * 100) / progressEvent.total
  );
  setProgress(percentCompleted);
};

export default api;
