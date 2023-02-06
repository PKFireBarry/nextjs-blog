"use client"

import Link from "next/link"



function clientSideRoute({ children, route }: { route: string, children: React.ReactNode}) {
  return (
    <Link
    href={route}
    >{children}</Link>
  )
}

export default clientSideRoute