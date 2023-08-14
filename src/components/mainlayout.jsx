"use client"

import React from 'react'
import Link from 'next/link'
import Mainheader from './mainheader'

import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBarChartFill} from 'react-icons/bs'
import {BiBookmarkAltMinus} from 'react-icons/bi'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import { LuAlertCircle, LuCat , LuCalendarRange } from "react-icons/lu"
import { AiOutlineUsergroupDelete} from "react-icons/ai"
import { GoAlert } from "react-icons/go"
import { FaAngleRight} from "react-icons/fa"
import { useRouter } from "next/navigation";
import { useState } from 'react'
import { MenuContext } from '../context/menucontext'

const MainLayout = ({ children }) => {
  const router = useRouter();
  
  const handleOptionChange = (selectedValue) => {
    if (selectedValue === "assets") {
      router.push("/assets"); // Remplacez "/page1" par l'URL de la page souhaitée
    } 
    else if (selectedValue === "category") {
      router.push("/categorie"); // Remplacez "/page1" par l'URL de la page souhaitée
    }
    
    //else if (selectedValue === "2") {
      //router.push("/page2"); // Remplacez "/page2" par l'URL de la page souhaitée
   // } else if (selectedValue === "3") {
      //router.push("/page3"); // Remplacez "/page3" par l'URL de la page souhaitée
    }
    const handleOptionChangeV = (selectedValue) => {
      if (selectedValue === "Manage user") {
        router.push("/managmentuser"); // Remplacez "/page1" par l'URL de la page souhaitée
      } 
      else if (selectedValue === "ManageUserRole") {
        router.push("/managerole"); // Remplacez "/page1" par l'URL de la page souhaitée
      } 
     else if (selectedValue === "Manage Setting") {
        router.push("/"); // Remplacez "/page1" par l'URL de la page souhaitée
      } 
      
      //else if (selectedValue === "2") {
        //router.push("/page2"); // Remplacez "/page2" par l'URL de la page souhaitée
     // } else if (selectedValue === "3") {
        //router.push("/page3"); // Remplacez "/page3" par l'URL de la page souhaitée
      }
  
  return (
    <div className='bg-gray-400  w-screen min-h-screen'>
<Mainheader/>
      <div className=' ps-8  mb-8 flex justify-start items-start  h-100 '>
        <aside className={' bg-gray-500 text-white rounded-lg '}>
<ul>
  
<ul className=' flex justify-start items-center hover:text-blue-600 rounded-xl p-2 '>
<AiOutlineHome className='mr-2'/>
<Link href="/">Home</Link>


</ul>
<div className="flex justify-start items-centers rounded-xl p-2">

<BsFillBarChartFill className='mr-2'/>
<select  onChange={(e) => handleOptionChange(e.target.value)} className='flex-col bg-slate-500 float-left block '>
 
    <option value="volvo">Inventory</option>
   
    <option className=''   value="assets">Assets</option>
    <option   value="category">Category</option>
    <option  value="audi"></option>
  
  </select>
  
</div>
<div className="flex justify-start items-center hover:text-blue-600 rounded-xl p-2">

<BsFillBarChartFill className='mr-2'/>
<select className='flex-col bg-slate-500 float-left block p-2 w-3/4'>
 
    <option value="volvo">Scans</option>
   
    <option className=''  alue="saab">Saab</option>
    <option   value="opel">Opel</option>
    <option  value="audi">Audi</option>
  
  </select>
  
</div>
<div className="flex justify-start items-center hover:text-blue-600 rounded-xl p-2">

<BsFillBarChartFill className='mr-2'/>
<select className='flex-col bg-slate-500 float-left block p-2 w-3/4'>
 
    <option value="volvo">Vulnerability</option>
   
    <option className=''  alue="saab">Saab</option>
    <option   value="opel">Opel</option>
    <option  value="audi">Audi</option>
  
  </select>
  
</div>



<div className="flex justify-start items-center hover:text-blue-600 rounded-xl p-2">

<BiBookmarkAltMinus className='mr-2'/>
<select className='flex-col bg-slate-500 float-left block  inset-y-0 right-0'>
<optgroup className='top-0 right-0 h-16 w-2/5 hover:text-white'>
 <option value="volvo">Rapports</option>

 <option className=''  alue="saab">Saab</option>
 <option   value="opel">Opel</option>
 <option  value="audi">Audi</option>
 </optgroup>
</select>

</div>

<li className='flex justify-start items-center hover:text-blue-600 rounded-xl p-2'>
<MdOutlineAirplaneTicket className='mr-2'/>
<Link href="/ticket">Ticket</Link></li>

<li className='flex justify-start items-center hover:text-blue-600 rounded-xl p-2'>
<LuCalendarRange className='mr-2'/>
<Link href="/calendar">calendar</Link></li>



<li className='flex justify-start items-center hover:text-blue-600 rounded-xl p-2'>
<LuAlertCircle className='mr-2'/>
<Link href="/aide">Help</Link></li>

<div className="flex justify-start items-centers rounded-xl p-2">

<LuCat className='mr-2'/>
<select  onChange={(e) => handleOptionChangeV(e.target.value)} className='flex-col bg-slate-500 float-left block '>
 
    <option value="volvo">Your Teams</option>
   
    <option className=''   value="Manage user">Manage User</option>
    <option  className='' value="ManageUserRole">Manage User Role</option>
    <option  className='' value="Manage Setting">Manage Setting</option>
    <option  value="audi"></option>
  
  </select>
  
</div>

<li className='flex justify-start items-center hover:text-blue-600 rounded-xl p-2'>
<AiOutlineUsergroupDelete className='mr-2'/>
<Link href="/account">Account</Link></li>

<li className='flex justify-start items-center hover:text-blue-600 rounded-xl p-2'>
<GoAlert className='mr-2'/>
<Link href="/alerts">Alerts</Link></li>
</ul>
</aside>

      <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout