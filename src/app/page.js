"use server"
import NavBar from "../../components/NavBar";
import AddUser from "../../components/AddUser";
import { auth } from "../auth";
import { SignInButton } from "../components/sign-in-button";
import { SignOutButton } from "../components/sign-out-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if(session?.user){
    return (
        <div>
          <Link href="/user-info"> User Info </Link>
          <SignOutButton />
          <NavBar/>
          <main >
            <AddUser/>
          </main>
        </div>
    )
  }
  return (
    <div>
      <SignInButton/>
    </div>
  );
}
