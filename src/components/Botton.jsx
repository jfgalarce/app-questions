"use client";
import { useRouter } from "next/navigation";
const Botton = () => {
  const router = useRouter();
  return (
    <div 
     onClick={() => router.refresh()}
    className="rounded-lg shadow shadow-stone-200 bg-white p-2 border-slate-200 text-center fond-mono text-lg cursor-pointer">
      Anterior
    </div>
  );
};
export default Botton;
