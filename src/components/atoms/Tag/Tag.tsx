import React from "react";

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="p-1 border border-purple-500 rounded-lg">
      <p className="text-sm text-white">{text}</p>
    </div>
  );
};

export default Tag;
