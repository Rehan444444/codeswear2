import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';



const Navbar = () => {
  return (
    <div className='w-64 md:w-full mx-32 md:mx-1'>
     <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='w-64 ' src="/image1.png" alt="" />
      
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
     <Link href={"/"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Home</a></Link>
     <Link href={"/about"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">About us</a></Link>
     <Link href={"/Contact"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Contact us</a></Link>
     <Link href={"/Tshirt"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Tshirt </a></Link>
     <Link href={"/Hoodies"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Hoodies</a></Link>
     <Link href={"/Mugs"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Mugs</a></Link>
     <Link href={"/Stickers"}> <a class="mr-5 cursor-pointer hover:text-blue-600 hover:underline font-semibold">Stickers</a></Link>
    </nav>
    <button class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 active:bg-green-700 font-semibold rounded-xl text-white mt-4 md:mt-0">Sign-up/Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <div className='position:absolute mx-5 cursor-pointer '>
    <  AiOutlineShoppingCart className='text-4xl mx-4'/>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar
