import React, { ButtonHTMLAttributes } from "react"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  className?: string
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "subtle"
    | "ghost"
    | "success"
    | "link"
  icon?: any
  styles?: any
  disabled?: boolean
  size?: string
  iconPosition?: "left" | "right" | "end" | "start"
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  className,
  variant = "default",
  size = "default",
  icon,
  children,
  styles,
  disabled,
  iconPosition = "right",
  href,
  ...rest
}) => {
  const classesStyles = cn(
    buttonVariants({
      variant,
      size,
    })
  )

  const customStyles = {
    ...styles,
    cursor: isLoading ? "progress" : disabled ? "not-allowed" : "pointer",
    display: "flex",
    gap: "7px",
    // pointerEvents: isLoading && "auto",
  }


  if (href) {
    return (
      <Link
        className={cn(className, classesStyles)}
        style={customStyles}
        href={href}
        {...rest}
      >
        {iconPosition === ("left" || "start") && !isLoading && icon}
        {children}
        {iconPosition === ("right" || "end") && !isLoading && icon}
      </Link>
    )
  }

  return (
    <button
      className={cn(className, classesStyles)}
      disabled={disabled || isLoading}
      style={customStyles}
      {...rest}
    >
      {isLoading && <Icons.spinner className="h-4 w-4 animate-spin" />}
      {iconPosition === "left" && !isLoading && icon}
      {children}
      {iconPosition === "right" && !isLoading && icon}
    </button>
  )
}

export default Button
