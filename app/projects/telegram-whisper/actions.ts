"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function postTelegramVerificationToken(token: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/telegram/verify-user/${token}`,
    {
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
    },
  );
  if (!res.ok) {
    try {
      const err = await res.json();
      return { error: err.message };
    } catch (error) {
      return { error: "invalid request" };
    }
  }
  revalidatePath("/projects/telegram-whisper");
}
