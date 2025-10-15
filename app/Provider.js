
 "use client"
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { supabase } from "@/services/supabaseClient";
import { Divide } from "lucide-react";
import React, {useContext, useEffect, useState} from "react";


function Provider({children}) {

    const [user, setUser] = useState();

    useEffect(() =>{
        CreateNewUser
    },[])



    const CreateNewUser = () => {
        supabase.auth.getUser().then(async({data: {user}}) => {
            
        let { data: Users, error } = await supabase
       .from('Users')
       .select('*')
       .eq('email', user?.email);
       console.log(Users)

       if(Users?.length === 0){
       const { data, error} = await supabase.from('Users')
        .insert([
          { name:user?.user_metadata?.name,
            email:user?.email,
            picture:user?.user_metadata?.picture
          }
        ])
        console.log(data);
        setUser(data);
        return;
       }
       setUser(user[0]);
          
        })
    }


  return (
    <UserDetailsContext.Provider value={{user, setUser}}>            
    <div>{children}</div>
    </UserDetailsContext.Provider>
  );
}       
export default Provider;

export const useUser=() =>{
    const context =useContext(UserDetailsContext);
    return context;
}