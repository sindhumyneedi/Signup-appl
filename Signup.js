import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      user_firstname: "John",
      user_email: "john@example.com",
      user_phone: "1234567890",
      user_password: "password123",
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    try {
      const response = await fetch(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error occurred");
      }

      navigate("/login");
    } catch (error) {
      console.error("Sign Up Error:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="user_firstname">First Name</label>
          <input
            type="text"
            id="user_firstname"
            {...register("user_firstname", {
              required: "First name is required",
            })}
            className="form-control"
          />
          {errors.user_firstname && (
            <p className="error-message">{errors.user_firstname.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            {...register("user_email", { required: "Email is required" })}
            className="form-control"
          />
          {errors.user_email && (
            <p className="error-message">{errors.user_email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="user_password">Password</label>
          <input
            type="password"
            id="user_password"
            {...register("user_password", { required: "Password is required" })}
            className="form-control"
          />
          {errors.user_password && (
            <p className="error-message">{errors.user_password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="user_phone">Phone</label>
          <input
            type="text"
            id="user_phone"
            {...register("user_phone", {
              required: "Phone number is required",
            })}
            className="form-control"
          />
          {errors.user_phone && (
            <p className="error-message">{errors.user_phone.message}</p>
          )}
        </div>
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
