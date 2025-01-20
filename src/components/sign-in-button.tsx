"use client";
import { login } from "../lib/actions/auth";
export const SignInButton = () => {
    return <button onClick={() => login()}>sign in</button>
};