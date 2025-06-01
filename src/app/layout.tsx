// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

// These imports come from shadcn’s generated Sidebar files:
import { cookies } from "next/headers";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; // your sidebar‐content component

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Scrapper AI",
  description: "Scrap and analyze social media content with AI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read the “sidebar_state” cookie so the sidebar can remember if it was open/closed:
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
