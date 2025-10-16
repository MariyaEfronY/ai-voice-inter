import { Calendar, Icon, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SidebarOptions = [
    {
        name:'Dashboard',
        Icon:LayoutDashboard,
        path:"/dashboard"
    },
 {
        name:'Sheduled Interviews ',
        Icon:Calendar,
        path:"/sheduled-interviews"
    },
    {
        name:'All Interviews',
        Icon:List,
        path:"/all-interviews"
    },
    {
        name:'Billing',
        Icon:WalletCards,
        path:"/billing"
    },
 {
        name:'Settings',
        Icon:Settings,
        path:"/settings"
    },
]