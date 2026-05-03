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


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] ocus:text-[#ffffff] r+ounded-md text-default-text flex items-center justify-start font-medium text-[13px]">
              <Image src="/images/raven.png" alt="AccountInfo" width={20} height={20} className="mb-0.5" />
              Cillian
              <ChevronDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> My Account  </DropdownMenuLabel>
            <DropdownMenuItem className="hover:text-[#ffffff] focus:text-[#ffffff] ext-default-text" variant="default">
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:text-[#ffffff] focus:text-[#ffffff] text-default-text">
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text font-medium text-[13px] w-full justify-start">
          <Image src="/images/len.png" alt="homeIcon" width={20} height={20} />
          Search
        </Button>
        <Button className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text font-medium text-[13px] w-full justify-start">
          <Image src="/images/business-report_6439018.png" alt="homeIcon" width={20} height={20} className="mb-0.5" />
          Overview
        </Button>
        <Button className=" bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text flex items-center justify-start font-medium text-[13px]">
          <Image src="/images/spotlight_8560250.png" alt="showHighlights" width={20} height={20} />
          Highlights
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
        <Button className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text font-medium text-[13px] w-full justify-start">
          <Image src="/images/vinyl-record_2987300.png" alt="homeIcon" width={20} height={20} className="mb-0.5" />
          Music Lounge
        </Button>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle></ThemeToggle>
      </SidebarFooter>
    </Sidebar >
  )
}