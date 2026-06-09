import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading({ size, style }) {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <AiOutlineLoading3Quarters
        className={`animate-spin ${style}`}
        size={size}
      />
    </div>
  );
}
