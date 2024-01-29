import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { auth_base_url, api_key } from '../../firebase/db'


export const authApi = createApi({
  reducerPath: 'authApi', //como va a alamacenar en redux la info que vaya trayendo de firebase.
  baseQuery: fetchBaseQuery({ baseUrl: auth_base_url}),
  endpoints: (builder) => ({
    Signup: builder.mutation({
      query: ({...auth}) => ({
        url: `accounts:signUp?key=${api_key}`,
        method:"POST",
        body:auth,
      }) ,
    }),
    Login: builder.mutation({
        query: ({...auth}) => ({
          url: `accounts:signInWithPassword?key=${api_key}`,
          method:"POST",
          body:auth,
        }) ,
      }),
})
})

export const { useSignupMutation, useLoginMutation } = authApi