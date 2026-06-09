import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useClasses } from "../../contexts/ClassesContext";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { BackButton } from "../../components/BackButton/BackButton";
import { ColabHeader } from "../../components/Header/ColabHeader";
import { formatDate } from "../../scripts/formatDate";
import { Toastr } from "../../components/Toastr/Toastr";

import { BiEditAlt } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

export function ClassPage({ type }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isLogged, logout } = useAuth();
  const { handleEditClass } = useClasses();
  const [theme, setTheme] = useState(state.tema);
  const [date, setDate] = useState(state.dataMinistrada.split("T")[0]);
  const [formatedDate, setFormatedDate] = useState(
    formatDate(state.dataMinistrada)
  );
  const [isEdited, setIsEdited] = useState(false);
  const [isEmptyFields, setIsEmptyFields] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/");
    }
  }, [isLogged]);

  function isFormDataValid() {
    setTheme(theme.trim());
    setDate(date.trim());

    if (theme && date) {
      setIsEdited(true);
      return true;
    }

    return false;
  }

  function saveChanges() {
    if (isFormDataValid()) {
      const editedClass = {
        idAula: state.idAula,
        tema: theme,
        dataMinistrada: date,
        fkDisc: sessionStorage.getItem("discId"),
      };

      handleEditClass(editedClass);
      return;
    }

    setIsEmptyFields(true);
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
            {type === "edit" ? "Editar aula" : "Dados da aula"}
          </h2>
          <span className="text-[#FEFEFE]/60 text-lg text-center">
            {type === "edit"
              ? "Modifique os dados da aula"
              : "Visualize dados importantes da aula"}
          </span>
        </header>

        <div className="flex flex-col">
          <Input
            labelFor="Tema"
            type="text"
            state={{ getter: theme, setter: setTheme }}
            disabled={type === "edit" ? false : true}
          />

          <Input
            labelFor="Ministrada"
            type={type === "edit" ? "date" : "text"}
            state={
              type === "edit"
                ? { getter: date, setter: setDate }
                : { getter: formatedDate, setter: setFormatedDate }
            }
            disabled={type === "edit" ? false : true}
          />
        </div>

        {type === "edit" ? (
          <Button type="submit" onClick={saveChanges}>
            Salvar alterações
          </Button>
        ) : (
          <div className="flex items-center gap-4">
            <Button
              type="button"
              onClick={() => {
                navigate("/editar-aula", { state: state });
              }}
            >
              Editar dados
              <BiEditAlt className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
            </Button>
            <Button
              type="button"
              onClick={() => {
                const professor = `${sessionStorage.getItem(
                  "colabName"
                )} ${sessionStorage.getItem("colabSobrenome")}`;
                const disciplina = sessionStorage.getItem("discNome");
                const formURL = `http://localhost:3000/avaliar-aula?tema=${
                  state.tema
                }&prof=${professor}&discId=${sessionStorage.getItem(
                  "discId"
                )}&disc=${disciplina}&idAula=${state.idAula}`;

                navigator.clipboard.writeText(formURL);
              }}
            >
              Copiar link
              <FiCopy className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
            </Button>
          </div>
        )}
      </form>

      {isEdited && (
        <Toastr title="Editado com sucesso!" stateSetter={setIsEdited} />
      )}
      {isEmptyFields && (
        <Toastr
          title="Atenção!"
          message="Preencha todos os campos corretamente."
          type="warning"
          stateSetter={setIsEmptyFields}
        />
      )}

      <BackButton />
    </div>
  );
}
