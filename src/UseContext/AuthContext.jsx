import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
console.log(isLoggedIn)
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
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoggedIn(true);
    localStorage.setItem('logged', isLoggedIn)
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
        
      })
      .catch((error) => {
        console.error(error);
      });
      setIsLoggedIn(true);
      localStorage.setItem('logged', true)
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('logged')
  };

  useEffect(() => {
    const storedAdmin = localStorage.getItem('logged');
    if (storedAdmin) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
