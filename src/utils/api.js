const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
const API_VERSION = process.env.REACT_APP_API_VERSION || "v1";
const API_URL = `${API_BASE_URL}/${API_VERSION}`;

export default API_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors.join(", "));
  }

  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors.join(", "));
  }

  return response.json();
};
