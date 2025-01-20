import { auth } from "../../auth"
import Image from "next/image"
export default async function UserInfo() {
    const session = await auth();
    return (
        <div>
            {" "}
            <p>User signed in name: {session?.user?.name}</p>
        </div>
    )   
}