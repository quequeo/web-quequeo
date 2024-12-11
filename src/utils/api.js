//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = "https://ineduazj41.execute-api.us-east-1.amazonaws.com/production/api";
const API_VERSION = process.env.REACT_APP_API_VERSION;
const API_URL = `${API_BASE_URL}/${API_VERSION}`;

export default API_URL;

export const registerUser = async (userData) => {
  fetch('https://ineduazj41.execute-api.us-east-1.amazonaws.com/production/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
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
