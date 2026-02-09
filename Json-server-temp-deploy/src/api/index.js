// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE || "http://localhost:3001",
// });

// export default api;


import axios from "axios";

// Vercel serverless backend URL
const api = axios.create({
  baseURL: "/api", // artıq Vercel deploy-da /api route serverless function-ə yönləndirilir
});

export default api;
