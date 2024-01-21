import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi', //como va a alamacenar en redux la info que vaya trayendo de firebase.
  baseQuery: fetchBaseQuery({ baseUrl: base_url}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
        query:() => `products/${id}.json`
    }),
    getCategories : builder.query({
        query: () => 'categories.json'
    }),
  }),
})


export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } = shopApi