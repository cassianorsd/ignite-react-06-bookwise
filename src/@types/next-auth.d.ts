/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  export interface User {
    avatar_url: string
    created_at: Date
  }
  interface Session {
    user: User
  }
}
