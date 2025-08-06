import Body from "@/components/Body";
import { getListQuestions } from "@/db/database";

export default async function Home() {
  const [resut, fields] = await getListQuestions();
  const res = await resut[0];
  return (
    <Body listQuestions={res} />    
  );
}
