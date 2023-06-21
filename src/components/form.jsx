import { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [numberInput, setNumberInput] = useState(0);
  const handleChange = (e) => {
    setNumberInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
    setNumberInput(0);
  };
  return (
    <form
      className="div-input-and-button flex justify-center "
      onSubmit={handleSubmit}
    >
      {/* <div>
        <input
          type="number"
          className="input-clubs py-3 px-5 w-32 text-2xl font-Philosopher ring ring-slate-400 mb-4 text-indigo-700 font-bold rounded-lg"
          onChange={handleChange}
          value={numberInput}
        />
      </div> */}
      <div>
        <button
          type="submit"
          className="Add py-3 w-fit px-2 bg-white font-bold rounded-lg mx-5 text-2xl text-indigo-750 font-Philosopher"
        >
          ADD MATCH
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  numberField: PropTypes.number,
  setNumberFied: PropTypes.func,
};

export default Form;
