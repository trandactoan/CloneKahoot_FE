import axios from "axios"
import "./registration.css"
import React, { useState } from "react"
function Registeration()
{
  const [username,setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail] = useState("");
  const [registerState, setRegisterState]=useState("");
  const [newAccountData, setNewAccountData]=useState({});
  const [errorInfo, setErrorInfo]=useState({});
  const handleSubmit= () => {
    axios.post('http://localhost:5000/users/register', { username, password, email})
    .then(response => {
      setNewAccountData(response.data);
      setRegisterState("Success")
      console.log(response.data);
    })
    .catch(error=>{
      setRegisterState("Fail");
      setErrorInfo(error);
      console.log("Error when register new account: ", error);
    })
  }
  return (
    <div>
      <h1>Register your new account here</h1>
      <div className="formContainer">
        <div className="inputContainer">
          <label name="username"><b>USERNAME</b></label>
          <div>
            <input type="text" name="username" required placeholder="Input your username here" onChange={e=>setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="inputContainer">
          <label name="email"><b>EMAIL</b></label>
          <div>
            <input type="email" name="email" required placeholder="Input your email here" onChange={e=>setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="inputContainer">
          <label name="password"><b>PASSWORD</b></label>
          <div>
            <input type="password" name="password" required placeholder="Input your password here" onChange={e=>setPassword(e.target.value)}/>
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
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