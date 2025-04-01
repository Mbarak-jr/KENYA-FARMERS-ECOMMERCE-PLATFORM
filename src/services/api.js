// // src/services/api.js
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// // Create an axios instance with default config
// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor for adding the auth token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor for handling errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle token expiration
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
    
//     // Network errors - show appropriate offline message
//     if (!error.response) {
//       // Handle offline situation
//       console.error('Network Error. Please check your connection.');
//     }
    
//     return Promise.reject(error);
//   }
// );

// // Auth services
// export const authService = {
//   login: (credentials) => api.post('/auth/login/', credentials),
//   register: (userData) => api.post('/auth/register/', userData),
//   getProfile: () => api.get('/auth/profile/'),
//   updateProfile: (data) => api.patch('/auth/profile/', data),
// };

// // Product services (for both produce and agri-inputs)
// export const productService = {
//   getProducts: (type, params) => api.get(`/products/${type}/`, { params }),
//   getProductById: (type, id) => api.get(`/products/${type}/${id}/`),
//   createProduct: (type, data) => api.post(`/products/${type}/`, data),
//   updateProduct: (type, id, data) => api.put(`/products/${type}/${id}/`, data),
//   deleteProduct: (type, id) => api.delete(`/products/${type}/${id}/`),
//   searchProducts: (type, query) => api.get(`/products/${type}/search/`, { params: { query } }),
// };

// // Order services
// export const orderService = {
//   getOrders: () => api.get('/orders/'),
//   getOrderById: (id) => api.get(`/orders/${id}/`),
//   createOrder: (data) => api.post('/orders/', data),
//   updateOrderStatus: (id, status) => api.patch(`/orders/${id}/`, { status }),
// };

// // Cart services
// export const cartService = {
//   getCart: () => api.get('/cart/'),
//   addToCart: (productId, quantity, type) => api.post('/cart/add/', { product_id: productId, quantity, type }),
//   updateCartItem: (itemId, quantity) => api.patch(`/cart/items/${itemId}/`, { quantity }),
//   removeFromCart: (itemId) => api.delete(`/cart/items/${itemId}/`),
//   clearCart: () => api.delete('/cart/'),
// };

// // Transport services
// export const transportService = {
//   getRequests: () => api.get('/transport/'),
//   createRequest: (data) => api.post('/transport/', data),
//   updateRequestStatus: (id, status) => api.patch(`/transport/${id}/`, { status }),
//   getAvailableTransporters: (location) => api.get('/transport/available/', { params: { location } }),
// };

// // Weather and agricultural advice service (innovative feature)
// export const farmingInfoService = {
//   getWeatherForecast: (location) => api.get('/farming-info/weather/', { params: { location } }),
//   getCropAdvice: (cropType, location) => api.get('/farming-info/crop-advice/', { params: { crop_type: cropType, location } }),
//   getMartketTrends: () => api.get('/farming-info/market-trends/'),
// };

// export default api;


// In api.js
const getProfile = async () => {
  return {
    username: "JohnDoe",
    email: "johndoe@example.com",
  };
};

export default getProfile;
