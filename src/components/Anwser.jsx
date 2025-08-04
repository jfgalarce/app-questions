import clsx from "clsx";

const Anwser = ({ anwser, ok }) => {
  return (
    <div
      className={clsx(
        "rounded-lg shadow shadow-stone-200 bg-white p-2 border-slate-200 font-mono text-lg cursor-pointer",
        ok === true ? "active:bg-green-300" : "active:bg-red-300"
      )}
    >
      {anwser}
    </div>
  );
};

export default Anwser;
