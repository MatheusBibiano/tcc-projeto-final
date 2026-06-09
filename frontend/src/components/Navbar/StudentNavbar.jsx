import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { SiGoogleclassroom } from "react-icons/si";
import { TbStars } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect } from "react";

export function StudentNavbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <div
      className="
            flex items-center justify-center 
            fixed bottom-4
            md:bottom-10
            w-full
        "
    >
      <nav
        className="
            flex items-center justify-center 
            bg-[#201f22]/80
            border-2 border-[#151416]/20
            p-1
            rounded-2xl
            backdrop-blur-md
        "
      >
        <ul className="flex items-center">
          <li>
            <button
              className={`
                flex flex-col items-center
                rounded-xl
                py-2
                w-24
                ${path === "/aulas-disponiveis" && "bg-[#FEFEFE]/10"}
              `}
              onClick={() => {
                navigate("/aulas-disponiveis");
              }}
            >
              <SiGoogleclassroom
                className={`
                  text-3xl 
                  text-[#FEFEFE]/80 
                  ${path === "/aulas-disponiveis" && "text-[#44a85d]"}
                `}
              />
              <span
                className={`
                  text-sm 
                  text-[#FEFEFE]/80 
                  ${path === "/aulas-disponiveis" && "text-[#C6ECCC]"}
                `}
              >
                Aulas
              </span>
            </button>
          </li>
          <li>
            <button
              className={`
                flex flex-col items-center
                rounded-xl 
                py-2 
                w-24
                ${path === "/avaliacoes" && "bg-[#FEFEFE]/10"}
              `}
              onClick={() => {
                navigate("/aulas-disponiveis");
              }}
            >
              <TbStars
                className={`
                  text-3xl 
                  text-[#FEFEFE]/80 
                  ${path === "/avaliacoes" && "text-[#FFC300]"}
                `}
              />
              <span
                className={`
                  text-sm 
                  text-[#FEFEFE]/80
                  ${path === "/avaliacoes" && "text-[#F5F1DC]"}
                `}
              >
                Avaliações
              </span>
            </button>
          </li>
          <li>
            <button
              className="
                flex flex-col items-center 
                group 
                rounded-xl 
                py-2 
                w-24
              "
              onClick={() => {
                logout();
              }}
            >
              <IoLogOutOutline
                className="
                  text-3xl 
                  text-[#FEFEFE]/80 
                  group-hover:text-[#fa5268] 
                  ml-2
                "
              />
              <span
                className="
                  text-sm 
                  text-[#FEFEFE]/80 
                  group-hover:text-[#F6DBDB]
                "
              >
                Sair
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
