import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-400 relative">
      <Image className="mx-auto object-cover" fill src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SN6nmcV6W6oLa2KJ0ND8qEHUuxe9rsTkwfbdKrI3MtlD6gtA5roGFpwf5945lKErx1Y&usqp=CAU" alt="" />
    </div>
  );
}
