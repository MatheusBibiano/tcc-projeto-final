import { RatingTag } from "../RatingTag/RatingTag";
import { useRatings } from "../../contexts/RatingsContext";
import { useNavigate } from "react-router-dom";
import { convertQuality } from "../../scripts/convertQuality";

import { BiTrashAlt, BiChat } from "react-icons/bi";

export function Rating({ data }) {
  const [content, type] = convertQuality(data.qualidade);
  const { handleRemoveRating } = useRatings();
  const navigate = useNavigate();

  return (
    <div
      className="
      relative
      flex
      flex-col
      self-end
      gap-4
      justify-between
      p-5
      bg-[#201f22]
      shadow-lg
      rounded-lg
      w-full
      h-fit
      md:w-fit
      md:max-w-[45%]
      min-w-[250px]
    "
    >
      <header
        className={`
            flex gap-3
            ${data.mensagem && "items-center"}
            ${!data.mensagem && "flex-col"}
        `}
      >
        <h2 className="font-normal text-base truncate text-[#FEFEFE]">
          {data.tema}
        </h2>
      </header>

      {data.mensagem && (
        <p className="text-[#FEFEFE]/70 truncate">{data.mensagem}</p>
      )}

      <footer
        className="
          flex
          justify-between
          items-center
          gap-4
        "
      >
        <RatingTag type={type}>{content}</RatingTag>
        <div className="flex justify-end gap-2 w-full max-w-fit ml-4">
          <button
            title="Responder"
            className="outline-[#996DFF] p-2 active:bg-[#FEFEFE]/10 md:hover:bg-[#FEFEFE]/10 rounded-md group min-w-fit"
            onClick={() => {
              navigate("/avaliacao", { state: data });
            }}
          >
            <BiChat
              className="
              text-[#FEFEFE]/50
              active:text-[#996DFF]
              md:group-hover:text-[#996DFF]
            "
              size={24}
            />
          </button>
          <button
            className="outline-[#996DFF] p-2 active:bg-[#FEFEFE]/10 md:hover:bg-[#FEFEFE]/10 rounded-md group min-w-fit"
            title="Excluir"
            onClick={() => {
              handleRemoveRating(data.idAval);
            }}
          >
            <BiTrashAlt
              className="
              text-[#FEFEFE]/50
              active:text-[#fa677a]
              group-hover:text-[#fa677a]
            "
              size={24}
            />
          </button>
        </div>
      </footer>
    </div>
  );
}
