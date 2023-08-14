import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { getSession } from "@/lib/session"
import { UserAccountNav } from "@/components/user-account-nav"
import { NavItem } from "types"
import { DashboardNav } from "@/components/nav"

import {
  Cloud,
  Github,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  LayoutDashboard,
} from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
  navbar: NavItem[]
  sidebar?: any // Define the type for nav_items prop
  display_footer?: boolean // Define the type for display_footer prop
}

const menuItems = [
  {
    label: "My Account",
    items: [
      {
        icon: <User className="mr-2 h-4 w-4" />,
        text: "Profile",
        href: "/dashboard",
        shortcut: "⇧⌘P",
      },
      {
        icon: <Settings className="mr-2 h-4 w-4" />,
        text: "Settings",
        href: "/dashboard/settings",
        shortcut: "⌘S",
      },
    ],
  },
  // ... Add other menu groups as needed
  {
    label: "Admin",
    items: [
      {
        icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
        text: "Dashboard",
        href: "/admin/dashboard",
      },
      {
        icon: <Users className="mr-2 h-4 w-4" />,
        text: "Users",
        href: "/admin/dashboard/users",
      },
      {
        icon: <UserPlus className="mr-2 h-4 w-4" />,
        text: "Invite users",
        subItems: [
          {
            icon: <Mail className="mr-2 h-4 w-4" />,
            text: "Email",
          },
          {
            icon: <MessageSquare className="mr-2 h-4 w-4" />,
            text: "Message",
          },
          {
            icon: <PlusCircle className="mr-2 h-4 w-4" />,
            text: "More...",
          },
        ],
      },
    ],
  },
  // ... Add other menu groups as needed
  {
    label: "Other",
    items: [
      {
        icon: <LifeBuoy className="mr-2 h-4 w-4" />,
        text: "Support",
      },
      {
        icon: <Cloud className="mr-2 h-4 w-4" />,
        text: "API",
        disabled: true,
      },
    ],
  },
]

function normalizeText(text : any) {
  // Convert text to lowercase and remove leading/trailing spaces
  const normalizedText = text.trim().toLowerCase();
  // Replace spaces and underscores with hyphens
  const hyphenatedText = normalizedText.replace(/[\s_]+/g, '-');
  // Append "-te" at the end if it's not already present

  return hyphenatedText;
}

function generateNavigation(
  userRole: string | undefined,
  menuItems: NavItem[]
) {
    return [
      { title: "Dashboard", href: `/${normalizeText(userRole)}/dashboard` },
      ...menuItems,
    ]

}

function generateDropItems(userRole: string | undefined, menuItems: any[]) {
  if (userRole !== "ADMIN") {
    return menuItems.filter((item) => item.label !== "Admin")
  }

  return menuItems
}

export default async function Layout({
  children,
  navbar,
  sidebar,
  display_footer,
}: LayoutProps) {
  const session = await getSession()
  const user = session?.user
  const nav = generateNavigation(user?.role, navbar)
  const navItems = generateDropItems(user?.role, menuItems)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={nav} />
          {user ? (
            <UserAccountNav user={user} menuItems={navItems} />
          ) : (
            <nav>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Login
              </Link>
            </nav>
          )}
        </div>
      </header>
      {sidebar ? (
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          {sidebar && (
            <aside className="hidden w-[200px] flex-col md:flex">
              <DashboardNav items={sidebar} />
            </aside>
          )}
          <main className="flex-1">{children}</main>
        </div>
      ) : (
        <main className="flex-1">{children}</main>
      )}
      {display_footer && <SiteFooter />}
    </div>
  )
}
