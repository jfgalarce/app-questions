"use client"
import { useState } from "react"
import Questions from "./Questions"
import Botton from "./Botton"
import GroupAnswer from "./GroupAnswer"
import { useRouter } from 'next/navigation'

const Body = ({listQuestions}) => {
  const [questions,setQuestions] = useState(listQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const router = useRouter();
  const handleAddQuestion = () => {
    router.push('/add-question');
  }
  return (
    <div className="select-none container bg-slate-100 m-auto grid grid-cols-1 gap-2 p-2 rounded-lg">
      <div>
        <button onClick={handleAddQuestion} className="hover:bg-stone-200 size-10 flex justify-center items-center rounded-lg shadow shadow-stone-300 bg-white p-2 border-slate-200 text-center fond-mono text-lg cursor-pointer ">+</button>
      </div>
      <Questions question={questions[selectedQuestion]['text_question']} />
      <GroupAnswer ID={questions[selectedQuestion]['ID']} />
      <div className="grid grid-cols-2 gap-2">
        <Botton texto = "Anterior" action={-1} setSelectedQuestion={setSelectedQuestion} total={questions.length} />
        <Botton texto = "Siguiente" action={+1} setSelectedQuestion={setSelectedQuestion} total={questions.length} />
      </div>
    </div>
  )
}
export default Body
