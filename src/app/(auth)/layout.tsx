import { Button } from "@/components"
import { Icons } from "@/components/icons"

interface AuthLayoutProps {
  children: React.ReactNode
}

export const metadata = {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div
      className="container grid h-screen w-screen"
      style={{
        gridTemplateRows: "0 1fr auto",
      }}
    >
      <header
        style={{
          top: "0",
          height: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: " space-between",
          position: "sticky",
        }}
      >
        <Button
          icon={<Icons.chevronLeft className="h-4 w-4" />}
          href="/"
          variant="ghost"
          iconPosition="left"
        >
          Back
        </Button>
        <Button href={"/login"} variant="ghost">
          {"Login"}
        </Button>
      </header>
      {children}
      {/* <footer>
        <p className="px-8 text-center text-xs text-slate-500 dark:text-slate-400">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </footer> */}
    </div>
  )
}
