import { QRCodeSVG } from "qrcode.react";
import { Button } from "../Button/Button";

import { FiCopy } from "react-icons/fi";

export function ShareLink({ link, setter }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
            flex flex-col
            items-center gap-4
            z-[99]
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            bg-[#201f22]
            shadow-lg
            rounded-lg
            p-10
            w-[90%]
            md:w-fit
        "
      >
        <span className="text-[#FEFEFE] text-2xl">
          Compartilhar link da aula
        </span>
        <div className="border-2 border-[#996DFF] rounded-lg">
          <QRCodeSVG value={link} />
        </div>
        <Button
          onClick={() => {
            document.execCommand("", undefined, link)
            setter(false);
          }}
        >
          Copiar link
          <FiCopy className="text-[#FEFEFE]/80 text-2xl group-active:text-[#996DFF] md:group-hover:text-[#996DFF]" />
        </Button>
      </div>
      <button
        onClick={() => {
          setter(false);
        }}
        className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md z-[98]"
      ></button>
    </div>
  );
}
