"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { SidebarOptions } from '@/services/Constants' // ✅ fixed import
import Link from "next/link"
import { usePathname } from 'next/navigation'


export function AppSidebar() {

  const path = usePathname();
  console.log(path);


  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-5">
        <Image
          alt="Logo"
          src="/logo.webp"
          width={200}
          height={100}
          className="w-[150px]"
        />
        <Button className="w-full mt-5">
          <Plus /> Add new Interview
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SidebarOptions.map((option, index) => (
              <SidebarMenuItem key={index} className='p-1'>
                <SidebarMenuButton asChild className={`p-5 ${path==option.path&&'bg-blue-50'} `}>
                  <Link href={option.path}>
                    <option.Icon className={` ${path == option.path && 'text-primary'}`} />
                    <span className={`text-[16ox] font-medium ${path == option.path && 'text-primary'}`}>{option.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
