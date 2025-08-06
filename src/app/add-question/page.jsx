"use client";

import { useRouter } from 'next/navigation'
import { useRef, useState } from "react";

const page = () => {
  const question = useRef(null);
  const answer = useRef(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      question: question.current.value,
      answer: answer.current.value,
    };
    const res = await fetch("/api/postQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      question.current.value = "";
      answer.current.value = "";
    } else {
      alert("Error al guardar la pregunta y respuesta");
    }
  }
  return (
    <div className="select-none container bg-slate-100 m-auto grid grid-cols-1  rounded-lg font-mono text-lg">
      <form className="grid grid-cols-1 gap-2 p-2" onSubmit={handlerSubmit}>
        <label>Pregunta</label>
        <input
          placeholder="Escribe tu pregunta aquí"
          ref={question}
          disabled={loading}
          type="text"
          className="p-2 rounded-lg border border-slate-300 bg-white"
        />
        <label>Respuesta</label>
        <textarea
          placeholder="Escribe tu respuesta aquí"
          ref={answer}
          disabled={loading}
          className="p-2 rounded-lg border border-slate-300 bg-white resize-none h-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="hover:bg-stone-200 rounded-lg shadow shadow-stone-300 bg-white p-2 border-slate-200 text-center fond-mono text-lg cursor-pointer "
        >
          Guardar
        </button>
      </form>
      <button onClick={() => router.push('/')} disabled={loading} className="hover:bg-stone-200 rounded-lg shadow shadow-stone-300 bg-white p-2 mx-2 mb-2 border-slate-200 text-center fond-mono text-lg cursor-pointer "
>volver</button>
    </div>
  );
};
export default page;
