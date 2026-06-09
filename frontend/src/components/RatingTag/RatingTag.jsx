export function RatingTag({ type, children, className }) {
  const types = {
    // veryBad:   "text-[#F82C47] border-[#F82C47] bg-[#F6DBDB]",
    // bad:       "text-[#F48C06] border-[#F48C06] bg-[#F5E8DC]",
    // median:    "text-[#FFC300] border-[#FFC300] bg-[#F5F1DC]",
    // good:      "text-[#2DC653] border-[#2DC653] bg-[#DCF5E3]",
    // excellent: "text-[#25A244] border-[#25A244] bg-[#C6ECCC]",

    veryBad:   "bg-[#fa677a]",
    bad:       "bg-[#f7b156]",
    median:    "bg-[#fad867]",
    good:      "bg-[#50c46d]",
    excellent: "bg-[#44a85d]",
  };

  return (
    <div
      className={`
        px-6
        py-[6px]
        rounded-lg
        text-sm
        text-[#201f22]
        font-semibold
        max-w-fit
        ${types[type]}
        group-hover:scale-100
        ${className}
    `}
    >
      {children}
    </div>
  );
}
