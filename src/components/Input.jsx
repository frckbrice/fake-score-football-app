import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = (props, ref) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        ref={ref}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        className={props.className}
      />
    </>
  );
};
Input.prototype = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
// const forwardRefInput = React.forwardRef(Input);

// export default forwardRefInput;
export default Input;
