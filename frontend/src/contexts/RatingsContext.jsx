import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { axiosAPI } from "../services/axios";

const RatingContext = createContext();

export function RatingContextProvider({ children }) {
  const [filterByClass, setFilterByClass] = useState();

  // GET
  const { data, mutate } = useAxios(
    parseInt(filterByClass)
      ? `Avaliacao/ListarPorAula?fkAula=${filterByClass}`
      : `Avaliacao/Listar?fkDisc=${sessionStorage.getItem("discId")}`
  );

  // POST
  function handleAddRating(newRating) {
    axiosAPI.post("Avaliacao/NovaAvaliacao", newRating);
    // mutate([...data, newRating], false);
  }

  // DELETE
  function handleRemoveRating(id) {
    axiosAPI.delete(`Avaliacao/Excluir?id=${id}`);
    const updateRatings = data?.filter((current) => current.idAval !== id);
    mutate(updateRatings, false);
  }

  return (
    <RatingContext.Provider
      value={{
        data,
        setFilterByClass,
        handleAddRating,
        handleRemoveRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}

export function useRatings() {
  return useContext(RatingContext);
}
