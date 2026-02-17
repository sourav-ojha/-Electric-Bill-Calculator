import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    // Add any authentication or other headers
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Handle HTTP errors
    } else if (error.request) {
      // Handle network request failures
    }
    return Promise.reject(error);
  }
);

export default instance;
```

```diff