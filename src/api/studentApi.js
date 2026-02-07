import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});

export const fetchStudents = () => API.get("/students");
export const createStudent = (data) => API.post("/student", data);
export const updateStudent = (id, data) => API.put(`/student/${id}`, data);
export const deleteStudent = (id) => API.delete(`/student/${id}`);
