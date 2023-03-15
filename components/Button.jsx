import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, backgroundColor, size, color }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };

  return <button style={style}>{label}</button>;
}

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
