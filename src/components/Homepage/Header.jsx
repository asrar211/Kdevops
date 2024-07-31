import React, { useState } from 'react'

const Header = () => {
    const [isMenu, setisMenu] = useState(false)

    const isMenuHandler = () => {
        setisMenu(!isMenu);
    }
    const menuHandler = () =>{
        setisMenu(false)
    }
  return (
    <>
    <nav className={isMenu ? 'blur-sm flex justify-between items-center px-5 py-5 bg-[#2e2222] min-[1024px]:hidden' : 'flex justify-between items-center px-5 py-5 bg-[#2e2222] min-[1024px]:hidden'}>
        <div>
            <h1 className='text-[1.4rem] font-semibold mx-5'>💻 CodError</h1>
        </div>
        <div onClick={isMenuHandler} className='flex flex-col cursor-pointer'>
            <div className='w-[25px] h-[3px] bg-white mb-1'></div>
            <div className='w-[25px] h-[3px] bg-white mb-1'></div>
            <div className='w-[25px] h-[3px] bg-white mb-1'></div>
        </div>
    </nav>
    {isMenu && (
    <div className='absolute top-1 flex justify-between px-10 pt-20 font-semibold text-[1.4rem] bg-black z-10 w-full h-full'>
       <div className='flex flex-col gap-6 text-white drop-shadow-md cursor-pointer'>
            <h4>Solutions</h4>
            <h4>Industries</h4>
            <h4>Insights</h4>
            <h4>About</h4>
    </div>
    <div onClick={menuHandler} className='absolute top-7 right-5 cursor-pointer'>
            <div className='rotate-45 w-[25px] h-[3px] bg-white'></div>
            <div className='rotate-[-45deg] w-[25px] h-[3px] bg-white mt-[-2.5px]'></div>
        </div>
    </div>
     )}

     <nav className='flex justify-between items-center px-5 py-5 bg-[#2e2222] max-[1024px]:hidden'>
        <div className='w-[25%]'>
        <h1 className='text-[1.4rem] font-semibold mx-5 '>💻 CodError</h1>
        </div>
        <div className='flex justify-start items-center gap-4 text-[1rem] font-semibold w-full'>
            <h4>Solutions</h4>
            <h4>Industries</h4>
            <h4>Insights</h4>
            <h4>About</h4>
        </div>
        <div className='flex justify-end w-[25%]'>
           <button className='bg-orange-500 p-2 rounded-[20px] font-semibold'>Get in Touch</button>
        </div>
     </nav>
    </>
  )
}

export default Header