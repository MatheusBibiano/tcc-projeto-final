import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../services/axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userCredentials, setUserCredentials] = useState();
  const [isLogged, setIsLogged] = useState(
    sessionStorage.getItem("isLogged") || false
  );

  async function authenticate(user) {
    const res = await axiosAPI.post("Auth/Authenticate", user);

    if (res.status == 200 && res.data) {
      storeUserCredentials(res.data);
      setIsLogged(true);
      return true;
    }

    return false;
  }

  function storeUserCredentials(user) {
    setUserCredentials(user);
    sessionStorage.setItem("isLogged", true);
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("type", user.type);
    sessionStorage.setItem("fkPessoa", user.fkPessoa);
  }

  function logout() {
    setIsLogged(false);
    setUserCredentials(null);
    sessionStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
