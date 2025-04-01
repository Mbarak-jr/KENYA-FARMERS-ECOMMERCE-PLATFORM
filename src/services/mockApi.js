// src/api/mockApi.js

export const getProfile = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "JohnDoe",
        email: "johndoe@example.com",
      });
    }, 500); // Simulate delay
  });
};
