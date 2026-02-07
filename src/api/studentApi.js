import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const fetchStudents = () => API.get("/api/students");

export const createStudent = (data) => API.post("/api/student", data);

export const updateStudent = (id, data) => API.put(`/api/student/${id}`, data);

export const deleteStudent = (id) => API.delete(`/api/student/${id}`);
