// src/hooks/useSignup.js
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/api/signup",
        { username, email, password },
        { withCredentials: true }
      );

      const data = response.data;

      // Update auth context
      dispatch({ type: "LOGIN", payload: data });

      // Save user to local storage
      localStorage.setItem("user", JSON.stringify(data));

      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      setIsLoading(false);
      return null;
    }
  };

  return { signup, isLoading, error };
};