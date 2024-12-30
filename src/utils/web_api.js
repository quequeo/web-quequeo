import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
const API_URL = `${API_BASE_URL}`;
const SECRET_KEY = process.env.REACT_APP_WEB_QUEQUEO_SECRET_KEY;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Secret-Key": SECRET_KEY,
  },
});

const handleApiError = (error) => {
  if (error.response && error.response.data && error.response.data.errors) {
    throw new Error(error.response.data.errors.join(", "));
  } else {
    throw new Error("An unknown error occurred");
  }
};

export const quequeoContent = async () => {
  try {
    const response = await apiClient.get("/web/quequeo/content");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const aboutmeContent = async () => {
  try {
    const response = await apiClient.get("/web/about_me/content");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const workexperienceContent = async () => {
  try {
    const response = await apiClient.get("/web/work_experience/content");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
