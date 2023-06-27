import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('')
  console.log(token)
  const login = (user, password) => {
    const dataLogin = {
      user: user,
      password: password,
    };
    fetch("http://localhost:3000/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoggedIn(true);
    localStorage.setItem("logged", isLoggedIn);

  };

  const register = (user, email, password) => {
    const dataRegister = {
      user: user,
      email: email,
      password: password,
    };
    fetch("http://localhost:3000/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegister),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token)
        localStorage.setItem('token', token)
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoggedIn(true);
    localStorage.setItem("logged", true);
    localStorage.setItem('token', token)
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedAdmin = localStorage.getItem("logged");
    if (storedAdmin) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        setToken(storedToken)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
