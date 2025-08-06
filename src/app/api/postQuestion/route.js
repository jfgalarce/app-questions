import { NextResponse } from "next/server";
import { postQuestion} from "@/db/database";
export async function POST(request) {
  try {
    const body = await request.json();
    const [resut, fields] = await postQuestion(body.question, body.answer);
    return NextResponse.json({ message: "Pregunta guardada correctamente"});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}