import { toast } from "@/hooks/use-toast"
import helper_manager from "./helperSetter"
import { toast as toast2 } from "react-hot-toast"

/**
 * Display an error message and optionally update the helper state.
 *
 * @param {object} error - The error object containing response details.
 * @param {Function} [setHelper] - Optional function to update the helper state.
 * @param {any} [setFocus] - Optional parameter (type could be more specific if known).
 */

const display_error = (error: any, setHelper?: Function, setFocus?: any) => {
  if (!error?.response?.data) return
  const { message, helper } = error.response.data || {}

  if (error.response.status >= 500 || !message) {
    toast({
      title: "Something went wrong",
      variant: "destructive",
    })
    toast2.error("Something went wrong")
  } else {
    toast({
      title: message,
      variant: "destructive",
    })
    toast2.error(message)

    helper && helper_manager(helper, setHelper, setFocus)
  }
}

export default display_error
