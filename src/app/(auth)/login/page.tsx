import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/components/icons"
import LoginForm from "./form"
import Logo from '../../../../public/logo.png'
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default async function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center gap-5 sm:w-[350px]">
        <div className="flex flex-col gap-2 text-center">
        <div  className="mx-auto h-6  mb-20" > 
          <Image
          src={Logo}
          alt="logo"  
          width={200}
          height={80} /></div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter your email or username to sign in to your account
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/forget-password"
            className="hover:text-brand underline underline-offset-4"
          >
            Forget password?
          </Link>
        </p>
        <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don't have an account?
          </Link>
        </p>
      </div>
    </div>
  )
}