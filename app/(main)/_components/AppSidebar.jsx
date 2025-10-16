import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
 import Image from 'next/image'



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center' >
      <Image alt="Logo" src="/logo.webp" 
      width={200} 
      height={100}
      className="w-[150px]"
       />
       </SidebarHeader> 
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}