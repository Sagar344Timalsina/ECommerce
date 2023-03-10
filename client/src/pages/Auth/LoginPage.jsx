import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from '../../components/context/Auth';

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/client/login", {
        username,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.msg);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    // console.log(name,password);
  };
  return (
    <>
      <div className='d-flex align-items-center m-auto'>
        <form className="shadow  bg-white rounded p-5" onSubmit={handleSubmit}>
          <h4 className="title  ">Login FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your UserName"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password "
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LoginPage