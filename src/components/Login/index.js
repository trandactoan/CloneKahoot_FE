import React from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/userApi";
import "./login.css"
function Login()
{
  const navigate=useNavigate();
  const {register, handleSubmit, formState: { errors }}= useForm();
  const onSubmit = async (data) => {
    try{
      const response= await signIn(data.email, data.password);
      localStorage.setItem("_id", response._id);
      navigate("/");
    }catch(error)
    {
      console.log("Error when login: ", error);
    }
  }
  return (
    <div>
      <h1>Login your account here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <div className="inputContainer">
          <div><label>Email:</label></div>          
          <input {...register("email", {required: true}) } type="email" placeholder="Email" />
        </div>
        <div className="inputContainer">
          <div><label>Password:</label></div>          
          <input {...register("password", {required: true}) } type="password" placeholder="Password" />
        </div>
        {errors?.password?.type === "required"&& <p>This password field is required</p>}
        <input type="submit"/>
      </form>
    </div>)
}
export default Login;