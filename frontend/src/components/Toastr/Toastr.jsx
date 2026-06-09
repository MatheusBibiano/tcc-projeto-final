import { useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoIosWarning, IoIosCloseCircle } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

export function Toastr({
  title,
  message,
  stateSetter,
  duration = 5000,
  type = "success",
  pos = "top-right",
}) {
  var theme, icon, position;

  useEffect(() => {
    setTimeout(() => {
      stateSetter(false);
    }, duration);
  }, []);

  function setType() {
    switch (type) {
      case "success":
        theme = `
          border-[#20AD70]
          bg-[#E8F6F0]
        `;
        icon = <HiCheckCircle className="text-4xl text-[#20AD70]" />;
        break;
      case "info":
        theme = `
          border-[#009DE0]
          bg-[#E5F5FB]
        `;
        icon = <AiFillInfoCircle className="text-4xl text-[#009DE0]" />;
        break;
      case "warning":
        theme = `
          border-[#EE9500]
          bg-[#FCEBCF]
        `;
        icon = <IoIosWarning className="text-4xl text-[#EE9500]" />;
        break;
      case "error":
        theme = `
          border-[#F44336]
          bg-[#FDECEA]
        `;
        icon = <IoIosCloseCircle className="text-4xl text-[#F44336]" />;
        break;
    }
  }

  function setPos() {
    switch (pos) {
      case "top-right":
        position = `
          md:top-4
          md:right-4
        `;
        break;
      case "top-left":
        position = `
            md:top-4
            md:left-4
          `;
        break;
      case "bottom-right":
        position = `
          md:bottom-4
          md:right-4
        `;
        break;
      case "bottom-left":
        position = `
          md:bottom-4
          md:left-4
        `;
        break;
    }
  }

  setType();
  setPos();

  return (
    <button
      id="container"
      className={`
        fixed
        flex items-center gap-4
        rounded-lg
        shadow-lg
        p-4
        m-4 mt-0
        z-[99]
        border-2
        border-transparent
        max-w-xs
        top-4
        ${theme}
        ${position}
      `}
      type="button"
      onClick={() => {
        stateSetter(false);
      }}
    >
      <div className="flex items-center justify-center min-w-fit">{icon}</div>
      <div className="flex flex-col items-start">
        <span className="text-lg text-[#201f22] font-medium text-left">
          {title}
        </span>
        {message && <p className="text-[#201f22] text-left">{message}</p>}
      </div>
    </button>
  );
}
