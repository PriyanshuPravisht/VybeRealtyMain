import React from "react";

const MyButton = ({
  type = "button",
  name = "button",
  className = "",
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {name}
    </button>
  );
};

export default MyButton;
