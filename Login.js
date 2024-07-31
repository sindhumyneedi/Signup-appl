import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://syoft.dev/Api/userlogin/api/userlogin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/dashboard");
      } else {
        alert("Login failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("user_email", { required: "Email is required" })}
            className="form-control"
          />
          {errors.user_email && (
            <p className="text-danger">{errors.user_email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("user_password", { required: "Password is required" })}
            className="form-control"
          />
          {errors.user_password && (
            <p className="text-danger">{errors.user_password.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
