"use client"
import { useState } from "react"
import Questions from "./Questions"
import Anwser from "./Anwser"
import Botton from "./Botton"
import GroupAnswer from "./GroupAnswer"

const Body = ({listQuestions}) => {
  const [questions,setQuestions] = useState(listQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  return (
    <div className="select-none container bg-slate-100 m-auto grid grid-cols-1 gap-2 p-2 rounded-lg">
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
