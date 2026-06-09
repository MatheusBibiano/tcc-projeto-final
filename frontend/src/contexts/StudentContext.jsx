import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../services/axios";

const StudentContext = createContext();

export function StudentContextProvider({ children }) {
  const [studentData, setStudentData] = useState();

  async function handleGetStudent(personId) {
    if (personId) {
      const res = await axiosAPI.get(`Aluno/GetStudent?idPessoa=${personId}`);

      handleStoreStudent(res.data[0]);
    }
  }

  function handleStoreStudent(studentData) {
    setStudentData(studentData);
    sessionStorage.setItem("nome", studentData.nome);
    sessionStorage.setItem("sobrenome", studentData.sobrenome);
    sessionStorage.setItem("ra", studentData.ra);
  }

  return (
    <StudentContext.Provider value={{ studentData, handleGetStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
