import { RatingTag } from "../RatingTag/RatingTag";
import styles from "./FaceInput.module.css";

export function FaceInput({ id, data, setRadioValue }) {
  function hiddeWarning() {
    document.querySelector("#radiosContainer").style.borderColor =
      "transparent";
    document.querySelector("#warningMessage").style.display = "none";
  }

  return (
    <div
      className="
        flex items-center justify-center
        flex-col md:flex-row
        hover:scale-110 
        transition ease-in duration-75
        relative group
      "
    >
      <input
        className={styles.radio + " hidden"}
        type="radio"
        name="rate"
        id={`face-${id}`}
        value={data.value}
        onChange={(event) => {
          hiddeWarning();
          setRadioValue(event.target.value);
        }}
      />
      <label
        htmlFor={`face-${id}`}
        className="
          
          px-4 py-2
          rounded-lg
          cursor-pointer
        "
      >
        {data.icon}
      </label>

      <RatingTag
        type={data.type}
        className="
          hidden
          md:block
          md:absolute md:top-16
          w-auto
          p-2 
          m-2 
          min-w-max
          shadow-lg
          transition-all duration-100 scale-0 origin-top
        "
      >
        {data.text}
      </RatingTag>
    </div>
  );
}
