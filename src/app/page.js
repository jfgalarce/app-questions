import  Anwser  from "@/components/Anwser";
import Botton from "@/components/Botton";
import Questions from "@/components/Questions";
import { getQuestion } from "@/db/database";

export default async function Home() {
  const [resut, fields] = await getQuestion();
  const res = await resut[0];
  console.log(res);
  return (
    <div className="container bg-slate-100 m-auto grid grid-cols-1 gap-2 p-2 rounded-lg">
      <Questions question={res[0].quiz.question} />
      <div className="grid grid-cols-1 gap-2">
        {res[0].quiz.answer.map((item, index) => (
          <Anwser key={index} anwser={item.answer} ok={item.ID===res[0].quiz.ID} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Botton />
        <Botton />
      </div>
    </div>
  );
}
