export function FilterOption({ value, children }) {
  return (
    <option value={value} className="bg-[#201f22] text-[#FEFEFE]">
      {children}
    </option>
  );
}
