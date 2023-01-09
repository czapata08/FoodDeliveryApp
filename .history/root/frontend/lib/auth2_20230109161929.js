import { useEffect, createContext, useContext, useState } from "react";
import Router from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      console.log(JSON.stringify(Cookies.get()));
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { user: user } = await api.get("users/me");
        console.log(`user object: ${user}`);
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = (identifier, password) => {
    //prevent function from being ran on the server
    if (typeof window === "undefined") {
      return;
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/auth/local/`, { identifier, password })
        .then((res) => {
          //set token response from Strapi for server validation
          Cookies.set("token", res.data.jwt);
          //set user with data response
          const { user: user } = res.data;
          setUser(user);
          console.log(`AUTHENTICATED LOGIN USER = ${JSON.stringify(user)}`);
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          //redirect back to home page for restaurance selection
          Router.push("/");
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          console.log(error);
          reject(error);
        });
    });
  };

  const registerUser = (username, email, password) => {
    //prevent function from being ran on the server
    //to make sure that it is on the client side,
    //if window is not defined, than it is running on server
    if (typeof window === "undefined") {
      return;
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/auth/local/register`, { username, email, password })
        .then((res) => {
          //use Cookie capability to store JWT token
          //set token response from Strapi for server validation
          Cookies.set("token", res.data.jwt);
          const { user: user } = res.data;
          setUser(user);
          console.log(
            `USER HAS BEEN REGISTERED, USER = ${JSON.stringify(user)}`
          );
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          //redirect back to home page for restaurance selection
          Router.push("/");
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          reject(error);
        });
    });
  };

  // Only Authenticated User Can Have Access To This Route
  //Therefore JWT must be provided
  //response should have updated user data
  //test route with POSTMAN

  const updateUser = (id, username) => {
    if (typeof window === "undefined") {
      return;
    }
    return new Promise((resolve, reject) => {
      axios
        .put(`${API_URL}/auth/local/updateUser`, {
          query: {
            where: { id: id },
            data: {
              username: username,
            },
          },
        })
        .then((res) => {
          console.log(res.data);
          const { user: user } = res.data;
          setUser(user);
          resolve(res);
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          reject(error);
        });
    });
  };

  const logout = (email, password) => {
    //remove token and user cookie
    Cookies.remove("token");
    delete window.__user;
    // sync logout between multiple windows
    window.localStorage.setItem("logout", Date.now());
    //Set user to null
    setUser(null);
    headerToken = "";
    console.log(`USER HAS BEEN LOGGED OUT`);
    //redirect to the home page
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        updateUser,
        registerUser,
        loading,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
