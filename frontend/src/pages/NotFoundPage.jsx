import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent absolute left-0 right-0 top-0 bottom-0 gap-2">
      <h2 className="flex items-center justify-center text-[#FEFEFE] text-xl md:text-3xl font-bold gap-3">
        <FiAlertTriangle className="text-4xl" />
        Página não encontrada!
      </h2>
      <button
        className="text-[#FEFEFE]/80  hover:underline hover:text-[#8257E5]"
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar para a página anterior
      </button>
    </div>
  );
}
