import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import { ThemeProvider } from "./ThemeProvider"

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <div className="flex w-full flex-col items-center justify-center bg-background py-24 font-sans text-foreground">
        <main className="flex min-h-screen w-full flex-col gap-10 px-0 sm:w-[700px] sm:px-6">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
