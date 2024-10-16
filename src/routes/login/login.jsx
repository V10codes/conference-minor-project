import "./login.scss";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// import apiRequest from "../../lib/apiRequest";
// import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  //   const [error, setError] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   setIsLoading(true);
    //   const formData = new FormData(e.target);
    //   const username = formData.get("username");
    //   const password = formData.get("password");
    //   try {
    //     const res = await apiRequest.post("/auth/login", {
    //       username,
    //       password,
    //     });
    //     console.log(res.data);
    //     updateUser(res.data);
    //     navigate("/");
    //   } catch (error) {
    //     setError(error.response.data.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    navigate("/");
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
