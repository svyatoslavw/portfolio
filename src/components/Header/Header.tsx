"use client"

import { Moon, SunDim } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

import { Button } from "../ui"

import { cn } from "@/lib/utils"

const links = [
  { name: "About", href: "/" },
  { name: "Portfolio", href: "/portfolio" }
]

const Header = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="flex w-full flex-col gap-4">
      <h1 className="text-4xl font-bold">{links.find((link) => link.href === pathname)?.name}</h1>
      <div className="flex w-full justify-end">
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className={cn("underline underline-offset-2", {
                  "text-foreground/70 no-underline": pathname === link.href
                })}
              >
                {link.name}
              </a>
            </div>
          ))}
          <Button onClick={toggleTheme} variant={"ghost"} className="relative" size={"icon"}>
            <SunDim className="visible h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:visible dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
