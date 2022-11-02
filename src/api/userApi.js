import axios from "axios";
const userApi=axios.create({
  baseURL: "http://localhost:5000/users"
})
export const signUp = async(username, password, email)=>{
  const response = await userApi.post("/register", {username, password, email})
  return response.data;
}
export const signIn = async(email, password)=>{
  const response = await userApi.post("/login", {email, password})
  return response.data;
}
export const getUserById = (id)=>{
  const response = userApi.get(`/id?_id=${id}`, {id});
  return response.data
}