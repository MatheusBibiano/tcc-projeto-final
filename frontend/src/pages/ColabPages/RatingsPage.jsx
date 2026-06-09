import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "../../components/Rating/Rating";
import { Loading } from "../../components/Loading/Loading";
import { useRatings } from "../../contexts/RatingsContext";
import { useAuth } from "../../contexts/AuthContext";
import { useClasses } from "../../contexts/ClassesContext";
import { ColabNavbar } from "../../components/Navbar/ColabNavbar";
import { ColabHeader } from "../../components/Header/ColabHeader";
import { Filter } from "../../components/Filter/Filter";

import noRatings from "../../assets/icons/noRatings.svg";

export function RatingsPage() {
  const { data } = useRatings();
  const { isLogged, logout } = useAuth();
  const classes = useClasses();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/");
    }
  }, [isLogged]);

  const options = classes.data?.map((current) => {
    return {
      idAula: current.idAula,
      tema: current.tema,
    };
  });

  const rows = data?.map((rating) => (
    <Rating key={rating.idAval} data={rating} />
  ));

  return (
    <div
      className="
        flex flex-col
        h-full w-full
        mt-[100px]
      "
    >
      <ColabHeader
        discName={sessionStorage.getItem("discNome")}
        personName={`${sessionStorage.getItem(
          "colabName"
        )} ${sessionStorage.getItem("colabSobrenome")}`}
      />

      <article
        className="
          flex flex-1 flex-col
          px-4
          w-full
          md:px-10
          mb-10
        "
      >
        <header className="flex items-center justify-start mb-5 w-full">
          <h2 className="text-lg mr-2 text-[#F5F5F5] max-w-fit">Avaliações</h2>
          <span
            className="
            flex items-center justify-center
            bg-[#8257E5]
            rounded-full
            py-1 px-[11px]
            text-[#F8F8F8]
            font-bold
            h-8
            max-w-fit
          "
          >
            {!data ? <Loading style="text-white" /> : data?.length}
          </span>
          <div className="flex flex-1 gap-2 items-center justify-end">
            <Filter list={options} />
          </div>
        </header>

        {!data?.length ? (
          <div className="flex flex-col items-center justify-center mt-[15vh]">
            <img
              src={noRatings}
              alt="Balões de avaliação"
              className="w-[200px]"
            />
            <h2 className="mt-4 text-lg text-center text-[#F5F5F5]">
              Nenhuma avaliação encontrada
            </h2>
          </div>
        ) : (
          <ul
            className="
              flex
              flex-col
              w-full
              md:w-auto
              md:px-0
              md:flex-row
              md:flex-wrap
              justify-center
              md:justify-start
              gap-4
            "
          >
            {rows}
          </ul>
        )}
      </article>

      <ColabNavbar />
    </div>
  );
}
