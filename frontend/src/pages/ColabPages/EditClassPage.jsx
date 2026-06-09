import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useClasses } from "../contexts/ClassesContext";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { BackButton } from "../components/BackButton/BackButton";
import { ColabHeader } from "../components/ColabHeader/ColabHeader";
import { Toastr } from "../components/Toastr/Toastr";

export function EditClassPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isLogged, logout } = useAuth();
  const { handleEditClass } = useClasses();
  const [theme, setTheme] = useState(state.tema);
  const [date, setDate] = useState(state.dataMinistrada.split("T")[0]);
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
          <h2 className="text-[#FEFEFE] text-3xl text-center">Editar aula</h2>
          <span className="text-[#FEFEFE]/60 text-lg text-center">
            Modifique os dados da aula
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

        <Button type="button" onClick={saveChanges}>
          Salvar alterações
        </Button>
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
