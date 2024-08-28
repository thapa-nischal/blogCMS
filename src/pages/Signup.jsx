// src/components/SignupForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Input, Button } from "@nextui-org/react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err);
  const handleSuccess = (msg) => toast.success(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = inputValue;
    const data = await signup(username, email, password);

    if (data) {
      handleSuccess("Signup successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (error) {
      handleError(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  // Regex Validation for email
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = (email) => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  };

  const { email, password, username } = inputValue;

  return (
    <div className="flex justify-center flex-wrap content-center h-screen">
      <div className="form_container">
        <h2 className="text-center">Create your Account</h2>
        <p className="text-center">Get started with your free account.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              id="username"
              type="text"
              label="Username"
              // description="Please select a unique username."
              name="username"
              value={username}
              autoComplete="true"
              onChange={handleOnChange}
              className="max-w-xs"
              variant="faded"
              required
            />
          </div>
          <div>
            <Input
              id="email"
              type="email"
              label="Email"
              // description="We'll never share your email with anyone else."
              name="email"
              value={email}
              autoComplete="true"
              onChange={handleOnChange}
              variant="faded"
              color={isInvalid(email) ? "danger" : "success"}
              errorMessage={isInvalid(email) && "Please enter a valid email"}
              required
            />
          </div>
          <div>
            <Input
              id="password"
              type="password"
              label="Password"
              name="password"
              // description="Select a strong password."
              value={password}
              onChange={handleOnChange}
              variant="faded"
              className="max-w-xs"
              required
            />
          </div>
          <Button
            disabled={isLoading}
            color="secondary"
            variant="solid"
            type="submit"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
          <span className="text-center">
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
