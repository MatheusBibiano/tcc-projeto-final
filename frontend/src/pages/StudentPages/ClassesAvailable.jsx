import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StudentHeader } from "../../components/Header/StudentHeader";
import { StudentNavbar } from "../../components/Navbar/StudentNavbar";
import { useAuth } from "../../contexts/AuthContext";
import { useClasses } from "../../contexts/ClassesContext";
import { Loading } from "../../components/Loading/Loading";

import noClasses from "../../assets/icons/noRatings.svg";

export function ClassesAvailable() {
  const navigate = useNavigate();
  const { data } = useClasses();
  const { isLogged, logout } = useAuth();

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/");
    }
  }, [isLogged]);

  const rows = data?.map((current) => (
    <Class
      key={current.idAula}
      data={current}
      discId={sessionStorage.getItem("discId")}
    />
  ));

  return (
    <div
      className="
        flex flex-col
        h-full w-full
        mt-[100px]
      "
    >
      <StudentHeader
        discName={sessionStorage.getItem("discNome")}
        personName={`${sessionStorage.getItem("nome")} ${sessionStorage.getItem(
          "sobrenome"
        )}`}
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
        <header className="flex items-center justify-between mb-5 w-full">
          <div className="flex items-center">
            <h2 className="text-lg mr-2 text-[#F5F5F5] max-w-fit">Aulas</h2>
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
          </div>
        </header>

        {!data?.length ? (
          <div className="flex flex-col items-center justify-center mt-[15vh]">
            <img
              src={noClasses}
              alt="Balões de avaliação"
              className="w-[200px]"
            />
            <h2 className="mt-4 text-lg text-center text-[#F5F5F5]">
              Nenhuma aula encontrada
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

      <StudentNavbar />
    </div>
  );
}
