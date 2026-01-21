// "use client"
import Image from "next/image";

export default function Home() {
  // console.log("This is my id = ", process.env.ID)
  // console.log("This is my id = ", process.env.SECRET)
  return (
    <div>
      Hey this is my page and the id is {process.env.NEXT_PUBLIC_ID} and secret is  {process.env.SECRET} and the name is {process.env.NAME}
    </div>

  );
}
