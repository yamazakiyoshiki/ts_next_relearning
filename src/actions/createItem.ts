"use server";

import { ENDPOINT } from "@/constants";

export async function createItem(state: null | string, formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");
  if (id === "" || title === "") {
    return { msg: "不正な値です。" };
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
    return { msg: `${data.id}:${data.title}の登録が完了しました。` };
  } catch (err) {
    return { msg: "登録に失敗しました。" };
  }
}
