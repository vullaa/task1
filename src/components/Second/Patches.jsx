import React from "react";

const Patches = (props) => {
  const { version, type, icon, name, description, button } = props;
  return (
    <div>
      <h6>{`${version} ${type} ${icon} ${name} ${description} ${button}`}</h6>
    </div>
  );
};

export default Patches;
