
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import { Input } from "../components/ui/input";
import { SearchIcon, SeparatorHorizontal } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../components/ui/input-group";


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KinHarbour",
  description: "Your ssafespace, away from all the noise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("min-h-full w-full overflow-x-hidden", geistMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <div className="flex flex-col sticky top-0 py-2 bg-[#18181B] justify-center items-center gap-y-2 ">
          <InputGroup className="h-10 w-1/3 rounded-3xl px-8 placeholder:text-sm">
            <InputGroupInput placeholder="Search..."></InputGroupInput>
            <InputGroupAddon>
              <SearchIcon></SearchIcon>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Separator className="bg-[#373B3F]"></Separator>

        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem >
          <SidebarProvider>
            <AppSidebar />
            <main className="min-h-full min-w-full grid grid-cols-24 grid-rows-24 bg-[#18181B]">
              <SidebarTrigger className="fixed" />
              {children}

            </main>
          </SidebarProvider>

        </ThemeProvider>


      </body>
    </html>
  );
}
