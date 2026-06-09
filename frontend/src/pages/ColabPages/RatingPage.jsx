import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { BackButton } from "../../components/BackButton/BackButton";
import { Input } from "../../components/Input/Input";
import { RatingTag } from "../../components/RatingTag/RatingTag";
import { convertQuality } from "../../scripts/convertQuality";
import { dateTimeToDate } from "../../scripts/convertDateTimeToDate";
import { ColabHeader } from "../../components/Header/ColabHeader";

export function RatingPage() {
  const { state } = useLocation();
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();

  const [content, type] = convertQuality(state.qualidade);
  const [theme, setTheme] = useState(state.tema);
  const [message, setMessage] = useState(state.mensagem);
  const [date, setDate] = useState(dateTimeToDate(state.dataPostagem));

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div className="flex flex-col items-center w-full h-full mt-[100px]">
      <ColabHeader
        discName={sessionStorage.getItem("discNome")}
        personName={`${sessionStorage.getItem(
          "colabName"
        )} ${sessionStorage.getItem("colabSobrenome")}`}
        hasBackButton={true}
      />

      <div className="flex flex-col w-[80%]">
        <Input
          labelFor="Tema da aula"
          state={{ getter: theme, setter: setTheme }}
          disabled={true}
        />

        <Input
          labelFor="Data de postagem"
          state={{ getter: date, setter: setDate }}
          disabled={true}
        />

        <div className="flex flex-col mb-8">
          <span className="text-lg text-[#F5F5F5] ml-2">Qualidade da aula</span>
          <RatingTag
            type={type}
            className="max-w-full md:max-w-[30%] h-10 flex items-center"
          >
            {content}
          </RatingTag>
        </div>

        {message && (
          <fieldset className="flex flex-col border-none">
            <span className="text-lg text-[#F5F5F5] ml-2" htmlFor="mensagem">
              Mensagem do aluno
            </span>
            <textarea
              className="
            h-44
            min-h-[44px]
            bg-transparent
            border-2 border-[#996DFF]
            rounded-lg
            p-2
            mb-4
            text-[#F5F5F5]/90
            text-base
            resize-y
            outline-none
            ring-2
            ring-transparent
            focus:ring-[#996DFF]
          "
              id="message"
              rows="4"
              maxLength="300"
              title="Campo opcional"
              placeholder="Mensagem de avaliação (opcional)."
              value={message}
            ></textarea>
          </fieldset>
        )}
      </div>

      <BackButton />
    </div>
  );
}
