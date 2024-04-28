// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
// import { ENDPOINT } from "@/constants";
import { ENDPOINT } from "@/constants";
import { NextRequest } from "next/server";

export async function GET() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return Response.json(data);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const id = formData.get("id");
  const title = formData.get("title");

  if (id === "" || title === "") {
    return Response.json({ msg: "不正な値です。" }, { status: 500 });
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title }),
    });
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ msg: "登録に失敗しました。" }, { status: 500 });
  }
}
