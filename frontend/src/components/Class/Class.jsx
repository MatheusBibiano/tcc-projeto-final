import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dateTimeToDate } from "../../scripts/convertDateTimeToDate";
import { ShareLink } from "../ShareLink/ShareLink";

import { HiOutlineCalendar } from "react-icons/hi";
import { BiShareAlt, BiEditAlt } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";

export function Class({ data, discId }) {
  const navigate = useNavigate();
  const [openShare, setOpenShare] = useState(false);

  const professor = `${sessionStorage.getItem(
    "colabName"
  )} ${sessionStorage.getItem("colabSobrenome")}`;
  const disciplina = sessionStorage.getItem("discNome");
  const formURL = `http://${import.meta.env.VITE_FORM_PATH}/avaliar-aula?tema=${
    data.tema
  }&prof=${professor}&discId=${discId}&disc=${disciplina}&idAula=${
    data.idAula
  }`;

  return (
    <div className="flex p-4 bg-[#201f22] justify-between gap-6 rounded-lg shadow-md">
      <div className="flex flex-col items-start">
        <h2 className="text-xl text-[#FEFEFE]">{data.tema}</h2>
        <div className="flex items-center gap-2">
          <HiOutlineCalendar className="text-lg text-[#FEFEFE]/60" />
          <span className="text-base text-[#FEFEFE]/60">
            {dateTimeToDate(data.dataMinistrada)}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          title="Abrir aula"
          className="flex items-center justify-center group p-3 rounded-lg active:bg-[#FEFEFE]/10 md:hover:bg-[#FEFEFE]/10"
          onClick={() => {
            navigate("/aula", { state: data });
          }}
        >
          <IoLogInOutline className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
        </button>
        <button
          title="Editar aula"
          className="flex items-center justify-center group p-3 rounded-lg active:bg-[#FEFEFE]/10 md:hover:bg-[#FEFEFE]/10"
          onClick={() => {
            navigate("/editar-aula", { state: data });
          }}
        >
          <BiEditAlt className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
        </button>
        <button
          title="Compartilhar link"
          className="flex items-center justify-center group p-3 rounded-lg active:bg-[#FEFEFE]/10 md:hover:bg-[#FEFEFE]/10"
          onClick={() => {
            setOpenShare(true);
          }}
        >
          <BiShareAlt className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
        </button>
      </div>

      {openShare && <ShareLink link={formURL} setter={setOpenShare} />}
    </div>
  );
}
