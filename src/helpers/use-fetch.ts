"use client"

import { useState } from "react"
import { toast } from "@/hooks/use-toast"

import api from "@/lib/axios"

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isFail, setIsFail] = useState(false)

  const fetchData = async (apiRequest, method = "GET", body = undefined) => {
    setIsLoading(true)
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      }

      if (body) {
        options.data = body
      }

      const response = await api(apiRequest, options)
      const data = response.data

      setIsSuccess(true)

      toast({
        title: `${data.message}`,
      })
    } catch (error) {
      setIsError(true)

      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred."

      toast({
        title: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isSuccess,
    isError,
    isFail,
    fetchData,
  }
}

export default useFetch
