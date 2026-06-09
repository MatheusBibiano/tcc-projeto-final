import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../services/axios";

const ColabContext = createContext();

export function ColabContextProvider({ children }) {
  const [colabData, setColabData] = useState();

  async function handleGetColab(personId) {
    if (personId) {
      const res = await axiosAPI.get(
        `Colaborador/GetDashboardColabData?idPessoa=${personId}`
      );

      handleStoreColab(res.data);
    }
  }

  function handleStoreColab(colabData) {
    setColabData(colabData);
    sessionStorage.setItem("colabName", colabData.nome);
    sessionStorage.setItem("colabSobrenome", colabData.sobrenome);
    sessionStorage.setItem("discNome", colabData.discNome);
    sessionStorage.setItem("discId", colabData.discId);
  }

  return (
    <ColabContext.Provider
      value={{
        colabData,
        handleGetColab,
      }}
    >
      {children}
    </ColabContext.Provider>
  );
}

export function useColab() {
  return useContext(ColabContext);
}
