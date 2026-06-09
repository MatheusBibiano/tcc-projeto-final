import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="
            flex items-center justify-center
            w-12
            h-12
            p-2
            bg-[#FEFEFE]/10
            md:bg-transparent
            md:hover:bg-[#FEFEFE]/10
            rounded-lg
            group
            fixed left-5 bottom-5 md:top-4 md:left-10
            z-50
        "
      onClick={() => {
        navigate(-1);
      }}
    >
      <IoArrowBack className="text-[#a27df8] text-3xl text-center md:text-[#FEFEFE]/80 md:group-hover:text-[#a27df8]" />
    </button>
  );
}
