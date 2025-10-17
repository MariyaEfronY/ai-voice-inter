"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/services/supabaseClient"

export const UserDetailsContext = createContext()

function Provider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const { data: { user: authUser }, error } = await supabase.auth.getUser()
    if (error) return console.error(error)
    if (!authUser) return console.log("No user logged in")

    const { data: users, error: dbError } = await supabase
      .from("Users")
      .select("*")
      .eq("email", authUser.email)

    if (dbError) return console.error(dbError)

    if (!users || users.length === 0) {
      setUser({
        name: authUser.user_metadata?.name || "Guest",
        email: authUser.email,
        picture: authUser.user_metadata?.picture || "/default-avatar.png" // ✅ added comma
      })
    } else {
      setUser(users[0])
    }
  }

  return (
    <UserDetailsContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default Provider

export const useUser = () => {
  const context = useContext(UserDetailsContext)
  if (!context) throw new Error("useUser must be used inside Provider")
  return context
}
