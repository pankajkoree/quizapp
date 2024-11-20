import React from "react";

interface OptionButtonProps {
  value: string; 
}

const OptionButton: React.FC<OptionButtonProps> = ({ value }) => {
  return (
    <div>
      <button>{value}</button>
    </div>
  );
};

export default OptionButton;
