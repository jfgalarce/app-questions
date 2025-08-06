import { getGroupAnswers} from "@/db/database";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
   try {
    const { ID } = await params;
    const [resut, fields] = await getGroupAnswers(ID);
    const res = await resut[0];
    return NextResponse.json(res);
  }
  catch (error) {
    return NextResponse.json(error);
  }
}