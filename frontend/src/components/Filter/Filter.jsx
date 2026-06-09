import { FilterOption } from "./FilterOption";
import { BsFilter } from "react-icons/bs";
import { useRatings } from "../../contexts/RatingsContext";

export function Filter({ list }) {
  const { setFilterByClass } = useRatings();

  const opts = list?.map((option, index) => (
    <FilterOption key={index} value={option.idAula}>
      {option.tema}
    </FilterOption>
  ));

  return (
    <div className="flex items-center bg-[#201f22] rounded-xl shadow-md">
      <BsFilter className="pl-2 text-[#FEFEFE]" size={24} />
      <select
        id="selectClass"
        className="w-full h-full p-2 mr-1 text-[#FEFEFE] bg-transparent outline-none"
        defaultValue={0}
        onChange={(event) => {
          setFilterByClass(document.querySelector("#selectClass").value);
        }}
      >
        <option disabled className="bg-[#8257E5] text-[#f3f3f3]">
          Tema das aulas
        </option>
        <option value={0} className="bg-[#201f22] text-[#FEFEFE]">
          Todos
        </option>
        {opts}
      </select>
    </div>
  );
}
