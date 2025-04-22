import {motion,useMotionValue} from 'framer-motion'


export default  function Achievements({title,amount,children}) {
  return (
    <div className=" flex items-end gap-x-3">
    <span className="text-4xl lg:text-2xl text-gray-100">{children}</span>
    <h1 className="flex flex-col gap-y-2">
        <span className="text-2xl lg:text-xl font-light text-yellow-500">{amount}</span>
        <span className="text-sm tracking-wide text-gray-500">{title}</span>


    </h1>


    </div>
  )
}

