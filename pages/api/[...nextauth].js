import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_ID_SECRET
        })
    ],
    secret: process.env.JWT_SECRET
})

// 155153810509-e1t20cpe9rtgssv7hun9o7ji5ju12l60.apps.googleusercontent.com

// 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