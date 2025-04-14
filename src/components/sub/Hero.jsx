'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen grid place-items-center">
     <div>
          <div className="felx flex-col items-center justify-center gap-y-3 font-light capitalize ">
             <div className="flex items-center justify-center">
                <Image 
                src={'/person.png'} 
                alt="person Image" 
                width={400} 
                height={400} 
                priority={true}
                className="h-auto w-[150px]"
                />
                <span className="absolute text-3xl font-semibold text-white"> Hi </span>
            </div>
            <h1 className=" text-center text-3xl  font-bold tracking-wider text-gray-500">My Name is Tsigie Beyene &</h1>
            <p className=" text-lg tracking-wider text-gray-700">I like learning and building every day😊</p>
         </div>
         <div>
            <a href="#">Icon</a>
         </div>
         <a href="#" className="mx-auto block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider">Talk to me</a>
    </div>    
    </div>
  );
}

 