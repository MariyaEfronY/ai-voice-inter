import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'



const DashboardProvider = ({ children}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>{children}</div>
    </SidebarProvider>

)
}

export default DashboardProvider





 


