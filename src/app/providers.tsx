"use client"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster"
import  { Toaster as T } from 'react-hot-toast';


export default function Providers({ children }: any) {

  return (
    <>
      <Toaster />
      <T/> 
      <SessionProvider>{children}</SessionProvider>
       
    </>
  )
}
