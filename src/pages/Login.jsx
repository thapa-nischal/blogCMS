// src/components/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (error) => toast.error(error);

  const handleSuccess = (msg) => toast.success(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputValue;
    const { success, message } = await login(email, password);

    if (success) {
      handleSuccess(message);
      setTimeout(() => {
        navigate("/home");
      }, 100);
    } else {
      handleError(message);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  // Regex Validation for Email
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = (email) => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  };

  const { email, password } = inputValue;

  return (
    <div className="flex justify-center flex-wrap content-center h-screen">
      <div className="form_container">
        <p className="text-center">Log into your Account</p>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              autoComplete="true"
              id="email"
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleOnChange}
              isInvalid={isInvalid(email)}
              color={isInvalid(email) ? "danger" : "success"}
              errorMessage={isInvalid(email) && "Please enter a valid email"}
              variant="faded"
              className="max-w-xs"
              required
            />
          </div>
          <div>
            <Input
              id="password"
              type="password"
              name="password"
              value={password}
              label="Password"
              onChange={handleOnChange}
              variant="faded"
              className="max-w-xs"
              required
            />
          </div>
          <Button disabled={isLoading} color="primary" variant="solid" type="submit">
            {isLoading ? "Logging in..." : "Submit"}
          </Button>
          <span className="text-center">
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
