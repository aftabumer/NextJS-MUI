import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let isRefreshing = false;
let refreshAccessTokenPromise: Promise<any> | null = null;

// Function to refresh access token
function refreshAccessToken() {
  // Logic to refresh token using your refresh token and update localStorage
  // Replace this with your actual token refreshing logic
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return Promise.reject(new Error("Refresh token not found in localStorage"));
  }

  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}api/user/token`, {
      refresh_token: refreshToken,
    })
    .then((response) => {
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.access_token);
      localStorage.setItem("refreshToken", response.data.data.refresh_token);
      return response.data.data.access_token;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = localStorage.getItem("token");

    // If token is present, add it to request's Authorization Header
    if (accessToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    // Handle response errors here
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing && refreshAccessTokenPromise) {
        // Wait for token refresh
        return refreshAccessTokenPromise
          .then((accessToken) => {
            // Retry with new access token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          })
          .catch((refreshError) => {
            return Promise.reject(refreshError);
          });
      }

      isRefreshing = true;
      originalRequest._retry = true;

      // Refresh the access token
      refreshAccessTokenPromise = refreshAccessToken()
        .then((accessToken) => {
          isRefreshing = false;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        })
        .catch((refreshError) => {
          isRefreshing = false;
          return Promise.reject(refreshError);
        });

      return refreshAccessTokenPromise;
    }

    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
