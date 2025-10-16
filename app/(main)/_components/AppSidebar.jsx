import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
 import Image from 'next/image'
 import { Button } from "@/components/ui/button"
 import { Plus } from "lucide-react"  



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center mt-5' >
      <Image alt="Logo" src="/logo.webp" 
      width={200} 
      height={100}
      className="w-[150px]"
       />
      <Button className='w-full mt-5'><Plus/>Add new Interview</Button>
       </SidebarHeader> 
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}