"use client"

const Navbar = () => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between
    border-r border-gray-200 px-4 py-10  ">
        <a href="#">
        <span className="text-3xl font-semibold text-red-400">T</span>.<span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">Beyene</span>
        </a>
        <div className="flex flex-col gap-y-3 sm:gap-y-2">
            <a href="#" className="group flex flex-col items-center gap-y-2">
            <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">icon</span>
            <span className="text-[10px] tracking-wide -translate-x-2  opacity-0  group-hover:translate-x-0
            group-hover:opacity-100 transition-all duration-300 text-center">name</span>
            </a>
        </div>
        <p>
            <span>C 2019-2024</span>
        </p>
    </div>
  )
}

export default Navbar