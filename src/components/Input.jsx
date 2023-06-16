import React, { forwardRef } from "react";

function Input({ onKeyUp, placeholder, type }, ref) {
  return (
    <>
      <input
        ref={ref}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        type={type}
        className="input-clubs py-3 px-12 text-2xl font-Philosopher ring ring-slate-400 mb-4 rounded-sm"
      />
    </>
  );
}

const forwardRefInput = React.forwardRef(Input);

export default forwardRefInput;
