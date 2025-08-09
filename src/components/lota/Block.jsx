const Block = ({ number }) => {
  return (
    <div className=" bg-sky-50 size-14 flex items-center justify-center font-semibold text-sky-600 text-3xl border border-sky-300 ">
      {number}
    </div>
  );
};
export default Block;
