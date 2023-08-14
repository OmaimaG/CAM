"use client"
import { useState, useEffect, useRef } from "react"
import { toast } from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { userLoginSchema } from "@/validation/zod"
import { Input,  Button } from "@components"
import api from "@/lib/axios"
import { ErrorCode } from "@/types/enums"
import display_error from "@/helpers/display_error"
import Link from "next/link"
import {redirect} from "next/navigation"

type UserLoginSchema = z.infer<typeof userLoginSchema>

const fields = [
  {
    name: "username",
    placeholder: "Enter your username or email or number",
    autoComplete: "username",
    autoFocus: true,
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    autoComplete: "current-password",
  },
]

export default function LoginForm({ className, ...props }: any) {
  const {
    register,
    handleSubmit,
    resetField,
    setFocus,
    formState: { errors },
  } = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [helper, setHelper] = useState(null)
  const [providerLoading, setProviderLoading] = useState<string>("")

  const loading = (who: string = "") => {
    setIsLoading(who ? true : false)
    setProviderLoading(who)
  }

  async function onSubmit(data: FormData) {
    try {
      loading("email")
      const {
        data: { message, result },
      } = await api.post(`/auth/login`, data)
      toast.success(message)
      signIn("credentials", result)
      redirect("/dashboard")
    } catch (err) {
      const error = err?.response?.data?.error
      switch (error?.code) {
        case ErrorCode.WrongPassword:
          resetField("password")
          break
      }

      display_error(err  , setHelper)
    } finally {
      loading()
    }
  }

  useEffect(() => {
    helper && setFocus(Object.keys(helper)[0] as string)

    const timeout = setTimeout(() => {
      setHelper(null)
    }, 30 * 1000)

    return () => clearTimeout(timeout)
  }, [helper, setFocus])

  const AInput = ({ name, errors, helper, ...props }) => {
    return (
      <section className="grid gap-1">
        <Input
          {...register(name)}
          {...props}
        />
         {errors && errors[name] && (
          <p className="px-1 text-xs text-red-600">{errors[name].message}</p>
        )}
        {helper && name in helper && (
          <div className={`flex flex-col gap-1 px-1 text-xs`}>
            {helper[name].href ? (
              <Link
                href={helper[name].href || ""}
                className={`text-red-600 ${helper[name].href && "underline"}`}
              >
                {helper[name].message}
              </Link>
            ) : (
              <p
              className={"text-red-600"}
              >
                {helper[name].message}
              </p>
            )}
            {helper[name]?.suggestions && (
              <div className={`flex`}>
                <p className="mr-1">Suggestions: </p>
                {helper[name].suggestions?.map((sugg, index) => {
                  return (
                    <p key={index}
                      className={`cursor-pointer text-green-600 underline`}
                    >
                      {index > 0 && ", "}
                      {sugg}
                    </p>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </section>
    )
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          {
            fields.map((field, index) => (
              <AInput
                errors={errors}
                helper={helper}
                autoFocus={index === 0}
                {...field}
              />
            ))
         }
          <Button
            isLoading={providerLoading === "email"}
            disabled={isLoading}
          >
            {"Login"}
          </Button>
        </div>
      </form>
    </div>
  )
}
