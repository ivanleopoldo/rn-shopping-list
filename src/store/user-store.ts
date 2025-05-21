import { create } from 'zustand'
import { Session, User } from '@supabase/supabase-js'

type AuthState = {
  user: User | null
  session: Session | null
  isAuthenticated: boolean
  setAuth: (session: Session | null) => void
  resetAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  isAuthenticated: false,
  setAuth: (session) =>
    set({
      session,
      user: session?.user ?? null,
      isAuthenticated: !!session?.user,
    }),
  resetAuth: () =>
    set({
      session: null,
      user: null,
      isAuthenticated: false,
    }),
}))
