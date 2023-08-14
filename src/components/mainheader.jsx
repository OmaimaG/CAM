
"use client"
import { AiOutlineSearch } from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
import {IoMdNotificationsOutline} from "react-icons/io"
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from "next/link"

import Logo from '../public/logo.png'

const mainheader = () => {

  return (
    <div className='bg-slate-200 flex justify-between items-center px-4 h-12 mb-4'>
      <div className="pt-4">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={80}
          
        />
      </div>






      <div className="flex ">
      <IoMdNotificationsOutline className=' mr-6 mt-2 '/>
      <FaUserCircle className=' mr-6 mt-2 '/>

      <form
            
              className="mx-auto  hidden   md:flex justify-stretch "
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search "
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-gray-500 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              > 
              <div>
                <AiOutlineSearch className="h-5 w-5" />
                <Link href="/login"></Link></div>
              </button>
            </form>


      </div>

      
    </div>







  )
}

export default mainheader