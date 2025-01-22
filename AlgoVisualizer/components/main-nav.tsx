import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"


interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block text-center font-bold">Algo Visualizer</span>
      </Link>
    </div>
  )
}
