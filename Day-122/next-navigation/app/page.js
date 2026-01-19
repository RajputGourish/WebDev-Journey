"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparams = useSearchParams()
  return (
    <div>
      This is my home page
      <div className="bg-red-500 text-center">{searchparams.get('blog')}</div>
      <div className="bg-red-500 text-center">{searchparams.get('utm_source')}</div>
      <div className="bg-red-500 text-center">{searchparams.get('search')}</div>
      <div className="bg-red-500 text-center">{searchparams.get('a')}</div>
      <div className="bg-red-500 text-center">{searchparams.has('a')}</div>
    </div>
  );
}
