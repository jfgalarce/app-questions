"use client";

const Botton = ({ texto, action, setSelectedQuestion, total }) => {
  const handleClick = () => {
    setSelectedQuestion((prev) => {
      const newIndex = prev + action;
      if (newIndex < 0 || newIndex >= total) return prev;
      return newIndex;
    });
  };
  return (
    <button
      onClick={handleClick}
      className="hover:bg-stone-200 rounded-lg shadow shadow-stone-300 bg-white p-2 border-slate-200 text-center fond-mono text-lg cursor-pointer"
    >
      {texto}
    </button>
  );
};
export default Botton;
