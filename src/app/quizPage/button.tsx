import React from "react";

interface OptionButtonProps {
  value: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({ value }) => {
  return (
    <div>
      <button className="relative xl:text-3xl flex items-center h-full p-4">
        {value}
      </button>
    </div>
  );
};

export default OptionButton;
