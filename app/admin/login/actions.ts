"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkPassword, createSessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password") || "");
  const redirectTo = String(formData.get("redirect") || "/admin/edit/about");

  if (!checkPassword(password)) {
    redirect(`/admin/login?error=1&redirect=${encodeURIComponent(redirectTo)}`);
  }

  cookies().set(ADMIN_SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(redirectTo);
}