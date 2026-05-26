import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {ClerkProvider} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { syncCurrentUser } from "@/lib/sync-user";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "GlobusFeedback - Public Roadmap",
  description: "A platform for users to suggest and vote on features",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncCurrentUser();
  return (
    <ClerkProvider>
    <html
      lang="en" suppressHydrationWarning>
      
    
      <body className={`${inter.className} min-h-screen flex flex-col bg-background`}>
        
        <ThemeProvider attribute ="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {/*Navbar*/}
      <Navbar/>
      {/*Main section */}
       <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      {/*footer*/}
        <Footer></Footer>
        </ThemeProvider>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
