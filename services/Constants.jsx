import { 
  BriefcaseBusinessIcon, 
  Calendar, 
  LayoutDashboard, 
  List, 
  Puzzle, 
  Settings, 
  User2Icon, 
  WalletCards,
  Code2Icon   // ✅ Add this import
} from "lucide-react";

export const SidebarOptions = [
  {
    name:'Dashboard',
    Icon:LayoutDashboard,
    path:"/dashboard"
  },
  {
    name:'Sheduled Interviews',
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
];

export const Interviewtype = [   // ✅ Exported properly
  {
    title:'Technical',
    icon:Code2Icon
  },
  {
    title:'Behavioral',
    icon:User2Icon
  },
  {
    title:'Experience',
    icon:BriefcaseBusinessIcon
  },
  {
    title:'Problem Solving',
    icon:Puzzle
  },
  {
    title:'Leadership',
    icon:User2Icon
  }
];

export default SidebarOptions;
