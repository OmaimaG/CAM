"use client"

import Link from "next/link"
import { User } from "next-auth"
import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email" | "username" | "role">
}

const menuItems = [
  { href: "/dashboard", title: "General" },
  { href: "/dashboard/settings", title: "Settings" },
]

function normalizeText(text : any) {
  // Convert text to lowercase and remove leading/trailing spaces
  const normalizedText = text.trim().toLowerCase();
  // Replace spaces and underscores with hyphens
  const hyphenatedText = normalizedText.replace(/[\s_]+/g, '-');
  // Append "-te" at the end if it's not already present

  return hyphenatedText;
}

export function UserAccountNav({ user }: UserAccountNavProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="h-8 w-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.username && <p className="font-medium">@{user.username}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
            <p className="w-[200px] truncate text-sm text-slate-600">
              {user.role === "ADMIN" ? (
                <span className="rounded-md bg-yellow-500 px-2 py-1 text-xs font-bold text-white">
                  Admin
                </span>
              ) : 
              <span className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-white">
                {user.role}
            </span>

              }
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        {user.role !== "USER" && 
         <DropdownMenuItem key={user.role} asChild>
         <Link href={`/${normalizeText(user.role)}/dashboard`}>Dashboard</Link>
       </DropdownMenuItem>
        }
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>{item.title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            })
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
