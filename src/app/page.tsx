import Link from "next/link"

import { Divider } from "@/components/ui"
import { LINKS, PERSONAL_INFORMATION } from "@/lib/constants"

export default function Home() {
  return (
    <main>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Hey 👋</h2>
        <div className="flex flex-col gap-4">
          {PERSONAL_INFORMATION.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      </section>
      <Divider />
      <section className="flex flex-col gap-4">
        {LINKS.map((link) => (
          <div key={link.href} className="flex items-center gap-1 text-sm">
            <span>{link.name}:</span>
            <Link
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-black underline underline-offset-2 dark:text-white"
            >
              {link.href.split("/").pop()}↗️
            </Link>
          </div>
        ))}
      </section>
    </main>
  )
}
