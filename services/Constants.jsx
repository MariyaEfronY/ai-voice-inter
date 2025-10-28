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


export const QUESTIONS_PROMPT = `
You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of high-quality interview questions:

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

📝 Your task:
- Analyze the job description to identify key responsibilities, required skills, and expected experience.
- Generate a list of interview questions depending on the interview duration.
- Adjust the number and depth of questions to match the interview duration.
- Ensure the questions match the tone and structure of a real-life {{type}} interview.

🧩 Format your response in JSON format with an array list of questions.

Format example:
interviewQuestions = [
  {
    question: "",
    type: "Technical / Behavioral / Experience / Problem Solving / Leadership"
  },
  {
    ...
  }
]

🎯 The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.
`;
