import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDateNow } from "../scripts/getDateNow";
import { Button } from "../components/Button/Button";
import { useRatings } from "../contexts/RatingsContext";
import { FaceInput } from "../components/FaceInput/FaceInput";
import { getCurrentURLParams } from "../scripts/getCurrentURLParams";
import { Toastr } from "../components/Toastr/Toastr";

import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiLaughing,
} from "react-icons/bs";
import { useEffect } from "react";

export function FormPage() {
  const [radioValue, setRadioValue] = useState();
  const [textareaValue, setTextareaValue] = useState("");
  const [successToastr, setSuccessToastr] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { handleAddRating } = useRatings();
  const navigate = useNavigate();

  const urlParams = getCurrentURLParams();

  useEffect(() => {
    if (
      Object.keys(urlParams).length < 5 ||
      Object.keys(urlParams).length > 5
    ) {
      navigate("/");
    }
  }, []);

  const radiosData = [
    {
      icon: <BsEmojiAngry className="text-[#F5F5F5]/50" size={"48"} />,
      text: "Péssima",
      type: "veryBad",
      value: 1,
    },
    {
      icon: <BsEmojiFrown className="text-[#F5F5F5]/50" size={"48"} />,
      text: "Ruim",
      type: "bad",
      value: 2,
    },
    {
      icon: <BsEmojiNeutral className="text-[#F5F5F5]/50" size={"48"} />,
      text: "Mediana",
      type: "median",
      value: 3,
    },
    {
      icon: <BsEmojiSmile className="text-[#F5F5F5]/50" size={"48"} />,
      text: "Boa",
      type: "good",
      value: 4,
    },
    {
      icon: <BsEmojiLaughing className="text-[#F5F5F5]/50" size={"48"} />,
      text: "Ótima",
      type: "excellent",
      value: 5,
    },
  ];

  const radios = radiosData.map((radio, index) => (
    <FaceInput
      key={index}
      id={index}
      data={radio}
      setRadioValue={setRadioValue}
    />
  ));

  function showWarning() {
    document.querySelector("#radiosContainer").style.borderColor = "#E73F5D";
    document.querySelector("#warningMessage").style.display = "flex";
  }

  function resetForm() {
    document.querySelector("#formRate").reset();
    setRadioValue(null);
    setTextareaValue("");
  }

  function sendRating() {
    if (radioValue) {
      const newRating = {
        dataPostagem: getDateNow(),
        mensagem: textareaValue ? textareaValue : null,
        qualidade: radioValue,
        fkAula: urlParams.idAula,
        fkAluno: 10,
      };

      handleAddRating(newRating);
      setSuccessToastr(true);
      setIsSent(true);
      resetForm();
    } else {
      showWarning();
    }
  }

  return (
    <div
      className="
        flex
        h-screen
        w-full
        items-center
        justify-center
      "
    >
      <form
        className="
        flex-1
        sm:flex-none
        flex flex-col
        sm:bg-[#201f22]
        sm:rounded-lg
        sm:shadow-xl
        p-4
        sm:p-10
    "
        id="formRate"
      >
        <header className="flex flex-col items-center mb-8">
          <h1 className="font-bold text-2xl text-[#FEFEFE] text-center mb-2">
            Avalie a qualidade da aula!
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <span className="text-[#F5F5F5]/50 text-xl">{urlParams.disc}</span>
            <hr
              className="
                hidden
                sm:block
                mx-3
                my-1
                h-[2px]
                w-2
                border
                border-transparent
                bg-[#F5F5F5]/40
              "
            />
            <span className="text-[#F5F5F5]/50 text-xl break-words max-w-[220px]">
              {urlParams.tema}
            </span>
          </div>
          <h4 className="text-[#F5F5F5]/50 text-xl">Prof. {urlParams.prof}</h4>
        </header>

        <fieldset className="flex flex-col border-none relative">
          <span className="text-xl text-[#F5F5F5]/80">
            Como você avaliaria essa aula?
          </span>
          <div
            id="radiosContainer"
            className="
              flex flex-1 gap-2 justify-center
              flex-wrap sm:flex-nowrap
              mb-6 p-1
              border-2 border-transparent
              rounded-lg
              rounded-br-none
              sm:rounded-tr-none
              sm:rounded-br-lg
            "
          >
            {radios}
          </div>
          <span
            id="warningMessage"
            className="
              hidden
              absolute
              right-0
              -bottom-[3px]
              sm:top-0
              sm:bottom-[78%]
              px-1
              py-1
              text-white
              text-sm
              bg-[#E73F5D]
              rounded-lg
              rounded-tr-none
              rounded-tl-none
              sm:rounded-br-none
              sm:rounded-bl-none
              sm:rounded-tr-lg
              sm:rounded-tl-lg
            "
          >
            Selecione uma opção
          </span>
        </fieldset>

        <fieldset className="flex flex-col border-none">
          <span className="text-xl text-[#F5F5F5]/80 mb-2" htmlFor="mensagem">
            Mensagem
          </span>
          <textarea
            className="
            max-h-52
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
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
          ></textarea>
        </fieldset>

        <Button onClick={sendRating} className="mt-8 md:mt-10">
          Enviar
        </Button>

        {isSent && successToastr ? (
          <Toastr
            title="Enviado!"
            message="Obrigado pelo feedback."
            stateSetter={setSuccessToastr}
          />
        ) : null}
      </form>
    </div>
  );
}
