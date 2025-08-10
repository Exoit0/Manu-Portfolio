"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode } from "react"

export function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}) {
  return (
    <NextThemesProvider
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
