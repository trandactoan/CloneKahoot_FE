import "./registration.css"
import React, { useState } from "react"
import { signUp } from "../../api/userApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Registeration()
{
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [registerState, setRegisterState]=useState("");
  const [newAccountData, setNewAccountData]=useState({});
  const [errorInfo, setErrorInfo]=useState({});
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try{
      const response= await signUp(data.username, data.password, data.email);
      setNewAccountData(response);
      setRegisterState("Success")
      navigate("/login")
    } catch(error)
    {
      setRegisterState("Fail");
      setErrorInfo(error);
    }
  }
  return (
    <div>
      <h1>Register your new account here</h1>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputContainer">
          <label name="username"><b>USERNAME</b></label>
          <div>
            <input type="text" {...register("username", {required: true}) } placeholder="Input your username here" />
          </div>
        </div>
        <div className="inputContainer">
          <label><b>EMAIL</b></label>
          <div>
            <input type="email" {...register("email", {required: true}) } placeholder="Input your email here" />
          </div>
        </div>
        <div className="inputContainer">
          <label name="password"><b>PASSWORD</b></label>
          <div>
            <input {...register("password", {required: true}) } type="password" placeholder="Password" />
            {errors?.password?.type === "required"&& <p>This password field is required</p>}
          </div>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
      {registerState==="Success" && newAccountData &&
        <div>
          You have success register account name: {newAccountData.username}
        </div>}
      {registerState==="Fail" && errorInfo &&
       <div>
          Fail by {errorInfo.message} by the error: {errorInfo.response.data}
        </div>}
    </div>)
}
export default Registeration;