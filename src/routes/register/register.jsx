import "./register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import apiRequest from "../../lib/apiRequest";

const Register = () => {
  //   const [error, setError] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
    // setIsLoading(true);
    // const formData = new FormData(e.target);
    // const username = formData.get("username");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // try {
    //   const res = await apiRequest.post("/auth/register", {
    //     username,
    //     email,
    //     password,
    //   });
    //   console.log(res.data);
    //   navigate("/login");
    // } catch (error) {
    //   setError(error.response.data.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
