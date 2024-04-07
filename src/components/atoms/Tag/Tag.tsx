interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className="p-1 border border-purple-500 rounded-lg">
      <p className="text-sm text-white">{children}</p>
    </div>
  );
};

export default Tag;
