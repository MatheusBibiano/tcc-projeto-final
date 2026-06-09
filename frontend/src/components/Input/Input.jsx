import { removeAccents } from "../../scripts/removeAccents";

import styles from "./Input.module.css";

export function Input({ type, labelFor, icon, state, disabled }) {
  return (
    <fieldset className="flex flex-col mb-8 min-w-[240px]">
      <label
        htmlFor={removeAccents(labelFor)}
        className="text-lg text-[#F5F5F5] ml-2"
      >
        {labelFor}
      </label>
      <div
        className="
          flex items-center
          bg-trasparent
          border-2 border-[#F5F5F5]/50
          min-h-10
          rounded-lg
          focus-within:border-[#8257E5]
        "
      >
        <input
          type={type}
          id={removeAccents(labelFor)}
          className={`
            flex-1
            w-full
            h-full
            pl-2
            py-[9px]
            ${type === "date" ? "py-0 h-[41px]" : "py-[9px]"}
            border-none
            text-lg text-[#F5F5F5]
            outline-none
            rounded-lg
            bg-transparent
            ${type === "date" && styles.datepicker}
          `}
          value={state.getter}
          onChange={(event) => {
            state.setter(event.target.value);
          }}
          autoComplete="off"
          maxLength={32}
          disabled={disabled}
        />
        {type !== "date" && (
          <div className="flex items-center justify-center p-3 max-w-fit">
            {icon}
          </div>
        )}
      </div>
    </fieldset>
  );
}
