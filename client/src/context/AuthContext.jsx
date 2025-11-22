// This file manages the authentication state for the whole frontend.
// It stores the logged-in user's info and the JWT token using React Context.

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage if already logged in
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Load token from localStorage if exists
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  // Called when a user successfully signs in
  const signin = (data) => {
    setUser(data.user);
    setToken(data.token);

    // Store in localStorage so user stays logged in on refresh
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  // Called when user logs out
  const signout = () => {
    setUser(null);
    setToken("");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // Send the auth data and functions to any component that needs them
  return (
    <AuthContext.Provider value={{ user, token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Helper hook so components can access auth data easily
export const useAuth = () => useContext(AuthContext);