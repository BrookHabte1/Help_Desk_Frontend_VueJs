import axios from "axios";

export function getUserRole() {
  return axios.get("/api/user/role"); // Replace with your Laravel API endpoint to fetch the user's role
}
