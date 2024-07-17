// src/hooks/useLogin.js
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message, token } = response.data;

      if (success) {
        // Update auth context
        dispatch({ type: "LOGIN", payload: { email, token } });

        // Save user to local storage
        localStorage.setItem("user", JSON.stringify({ email, token }));

        setIsLoading(false);
        return { success, message };
      } else {
        setError(message);
        setIsLoading(false);
        return { success, message };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, message: errorMessage };
    }
  };

  return { login, isLoading, error };
};
