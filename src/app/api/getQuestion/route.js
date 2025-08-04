import { getQuestion} from "@/db/database";

export async function GET() {
  const [resut, fields] = await getQuestion();
  const res = await resut[0];
  return new Response(JSON.stringify(res
  ), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}