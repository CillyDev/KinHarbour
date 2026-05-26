"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";
import Link from "next/link";


export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" className="border-r-[#373B3F]">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex bg-sidebar rounded-md text-default-text text-sm py-[1.15em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/raven.png" alt="AccountInfo" width={20} height={20} />
              Cillian
              <ChevronDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> My Account  </DropdownMenuLabel>
            <DropdownMenuItem className="hover:text-hovered-text text-default-text" variant="default">
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:text-hovered-text text-default-text">
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="w-full">
          <Button className=" w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.15em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
            <Image src="/images/business-report_6439018.png" alt="homeIcon" width={20} height={20} />
            Overview
          </Button>
        </Link>
        <Link href="/highlights">
          <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.15em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
            <Image src="/images/spotlight_8560250.png" alt="showHighlights" width={20} height={20} />
            Highlights
          </Button>
        </Link>
        <Link href="/music-lounge">
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.15em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/vinyl-record_2987300.png" alt="homeIcon" width={20} height={20} />
              Music Lounge
            </Button>
          </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          
        </SidebarGroup>
        <span className="flex">
          <span className="w-65 px-2.5">
            <Separator className="bg-[#373B3F]"></Separator>
          </span>
        </span>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <ThemeToggle></ThemeToggle>
      </SidebarFooter>
    </Sidebar >
  )
}