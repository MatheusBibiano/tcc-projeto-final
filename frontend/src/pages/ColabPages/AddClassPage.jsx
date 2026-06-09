import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useClasses } from "../../contexts/ClassesContext";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { BackButton } from "../../components/BackButton/BackButton";
import { ColabHeader } from "../../components/Header/ColabHeader";

export function AddClassPage() {
  const navigate = useNavigate();
  const { isLogged, logout } = useAuth();
  const { handleAddClass } = useClasses();
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/");
    }
  }, [isLogged]);

  function isFormDataValid() {
    setTheme(theme.trim());
    setDate(date.trim());
    return theme && date;
  }

  function createNewClass() {
    if (isFormDataValid()) {
      const newClass = {
        Tema: theme,
        DataMinistrada: date,
        FkDisc: sessionStorage.getItem("discId"),
      };

      handleAddClass(newClass);
    }
  }

  return (
    <div className="flex flex-col w-full h-full mt-[100px]">
      <ColabHeader
        discName={sessionStorage.getItem("discNome")}
        personName={`${sessionStorage.getItem(
          "colabName"
        )} ${sessionStorage.getItem("colabSobrenome")}`}
        hasBackButton={true}
      />

      <form className="flex flex-col gap-10 w-full h-full px-10 pt-8 max-w-xl self-center">
        <header className="flex flex-col items-center gap-1">
          <h2 className="text-[#FEFEFE] text-3xl text-center">
            Adicione uma aula
          </h2>
          <span className="text-[#FEFEFE]/60 text-lg text-center">
            Crie uma aula para ser avaliada por seus alunos
          </span>
        </header>

        <div className="flex flex-col">
          <Input
            labelFor="Tema"
            type="text"
            state={{ getter: theme, setter: setTheme }}
          />

          <Input
            labelFor="Ministrada"
            type="date"
            state={{ getter: date, setter: setDate }}
          />
        </div>

        <Button type="submit" onClick={createNewClass}>
          Criar
        </Button>
      </form>

      <BackButton />
    </div>
  );
}
