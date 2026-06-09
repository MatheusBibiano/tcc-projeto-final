export function Button({ children, type = "button", onClick, className }) {
  return (
    <button
      className={`
        flex items-center justify-center gap-2
        w-full
        bg-[#8257E5]
        text-white
        py-3
        shadow-sm
        rounded-lg
        outline-none
        ${className}
        active:bg-[#b396f7]

        md:transition
        md:ease-in
        md:duration-100
        md:hover:scale-105
        md:active:bg-[#8257E5]
        md:active:scale-100
      `}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      type={type}
    >
      {children}
    </button>
  );
}
