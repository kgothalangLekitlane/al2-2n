import type React from "react"
import type { Metadata } from "next"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alameda Learn - Educational Platform",
  description: "Comprehensive educational platform for grades 10-12",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1 overflow-auto p-4">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
