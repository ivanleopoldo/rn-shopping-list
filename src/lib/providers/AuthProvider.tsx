import { createContext, useContext, useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import { useAuthStore } from '@/store/user-store'
import { router } from 'expo-router'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setAuth = useAuthStore((s) => s.setAuth)
  const resetAuth = useAuthStore((s) => s.resetAuth)

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setAuth(session)
    }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setAuth(session)
        router.replace('/(app)')
      } else {
        resetAuth()
        router.replace('/(auth)')
      }
    })

    init()

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [setAuth, resetAuth])

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}
