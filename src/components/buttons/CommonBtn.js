import React from "react";

const CommonBtn = ({ data }) => {
  const { label, fn, styles } = data;
  return (
    <button type="button" onClick={fn || ""} className={styles}>
      {label}
    </button>
  );
};

export default CommonBtn;
