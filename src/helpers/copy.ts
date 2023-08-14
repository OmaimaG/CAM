import { toast } from "@/hooks/use-toast"

export default function copyTextToClipboard(text: string, msg?: string) {
  navigator.clipboard.writeText(text).then(
    () => {
      toast({ title: msg || "Text copied to clipboard." })
    },
    (err) => {
      toast({
        title: "Error copying text to clipboard",
        variant: "destructive",
      })
    }
  )
}
