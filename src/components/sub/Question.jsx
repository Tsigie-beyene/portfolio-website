"use client"
 import { questionArrow } from "@/assets"

export default function Question({data,index}) {
  return (
    <li className="border border-yellow-500 p-1 rounded-lg">
        <h1 className="flex items-center border-b text-xl font-extralight text-yellow-600
        tracking-wide cursor-pointer">
            <span>{questionArrow}</span>
            <span>{data.question}</span>

        </h1>
        <p className="pl-8 text-lg font-extralight tracking-wide text-gray-900
        first-letter:pl-3">
            {data.answer}
        </p>
    </li>
  )
}

