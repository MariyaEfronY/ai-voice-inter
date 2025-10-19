import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Provider from "@/app/Provider"
import WelcomeContainer from './dashboard/_components/WelcomeContainer'


const DashboardProvider = ({ children}) => {
  return (
    
    <Provider>
      
    <SidebarProvider>
      <AppSidebar />
      <div className=' w-full'>
        <SidebarTrigger />
        <WelcomeContainer />
        {children}
        </div>
    </SidebarProvider>
    </Provider>

)
}

export default DashboardProvider





 


