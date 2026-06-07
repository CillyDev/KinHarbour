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
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/raven.png" alt="AccountInfo" width={30} height={30} />
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
          <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
            <Image src="/images/writing_3883016.png" alt="homeIcon" width={30} height={30} />
            Overview
          </Button>
        </Link>
        <Link href="/highlights">
          <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
            <Image src="/images/spotlight_8560250.png" alt="showHighlights" width={30} height={30} />
            Highlights
          </Button>
        </Link>
      </SidebarHeader>
      <span className="flex justify-center">
        <span className="w-55 px-2.5">
          <Separator className="bg-[#373B3F]"></Separator>
        </span>
      </span>

      <SidebarContent>
        <SidebarGroup>
          <Link href="/music-lounge">
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/vinyl-record_2987300.png" alt="homeIcon" width={30} height={30} />
              Music Lounge
            </Button>
          </Link>
          <Link href="/music-lounge">
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/campfire_9069797.png" alt="homeIcon" width={30} height={30} />
              Kinship
            </Button>
          </Link>
          <Link href="/music-lounge">
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/treasure_3016780.png" alt="homeIcon" width={30} height={30} />
              Shared Secrets 
            </Button>
          </Link>
          <Link href="/music-lounge">
            <Button className="w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text">
              <Image src="/images/scroll_4001989.png" alt="homeIcon" width={30} height={30} />
              Quest Board
            </Button>
          </Link>

        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <ThemeToggle></ThemeToggle>
      </SidebarFooter>
    </Sidebar >
  )
}

