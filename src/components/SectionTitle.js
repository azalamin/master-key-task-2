import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-5">
      <h3 className="py-5 display-4 fw-bold text-center">{children}</h3>
    </div>
  );
};

export default SectionTitle;
