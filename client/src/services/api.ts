import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://server:5000/api",
});

// Fetch all students
export const fetchStudents = async () => {
  const response = await api.get("/students");
  return response.data;
};

// Fetch a single student by ID
export const fetchStudentById = async (id: number) => {
  const response = await api.get(`/students/${id}`);
  return response.data;
};

// Create a new student
export const createStudent = async (studentData: {
  name: string;
  email: string;
  age: number;
  specializationId: number;
}) => {
  const response = await api.post("/students", studentData);
  return response.data;
};

// Update an existing student by ID
export const updateStudentById = async (
  id: number,
  studentData: {
    name: string;
    email: string;
    age: number;
    specializationId: number;
  }
) => {
  const response = await api.put(`/students/${id}`, studentData);
  return response.data;
};

// Delete a student by ID
export const deleteStudentById = async (id: number) => {
  await api.delete(`/students/${id}`);
};

// Fetch all universities, including departments and specializations
export const fetchUniversities = async () => {
  const response = await api.get("/universities");
  return response.data;
};

export default api;
