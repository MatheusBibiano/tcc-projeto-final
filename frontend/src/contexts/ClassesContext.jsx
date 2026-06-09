import { createContext, useContext } from "react";
import { useAxios } from "../hooks/useAxios";
import { axiosAPI } from "../services/axios";

const ClassesContext = createContext();

export function ClassesContextProvider({ children }) {
  // GET
  const { data, mutate } = useAxios(
    `Aula/Listar?fkDisc=${sessionStorage.getItem("discId")}`
  );

  // POST
  function handleAddClass(newClass) {
    axiosAPI.post("/Aula/NovaAula", newClass);
    mutate([...data, newClass], false);
  }

  // PUT
  function handleEditClass(editedClass) {
    axiosAPI.put("/Aula/EditarAula", editedClass);

    const index = data.findIndex(
      (current) => current.idAula === editedClass.idAula
    );

    data.splice(index, 1, editedClass);
    mutate(data, false);
  }

  return (
    <ClassesContext.Provider value={{ data, handleAddClass, handleEditClass }}>
      {children}
    </ClassesContext.Provider>
  );
}

export function useClasses() {
  return useContext(ClassesContext);
}
