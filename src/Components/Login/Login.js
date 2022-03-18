import "./Login.css";
import { useState } from "react";
const Login = () => {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <h3>Pharmacy</h3>
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              className="Username"
              placeholder="Username"
              onChange={(e)=>{setusername(e.target.value)}}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="Password"
              name="Password"
              className="Password"
              placeholder="Password"
              onChange={(e)=>{setusername(e.target.value)}}
            />
          </div>

          <input
            type="button"
            name="log"
            className="btn"
            id="log"
            value="LOGIN"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
