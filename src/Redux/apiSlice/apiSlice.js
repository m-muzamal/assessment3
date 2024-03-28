import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getApi1: builder.query({
            query: (by) => `https://newsapi.org/v2/everything?q=apple&from=2024-03-27&to=2024-03-27&sortBy=${by}&apiKey=2052ff93239e49bba1ef98e65c07da78`,
        }),
        getApi2: builder.query({
            query: (by) => `https://newsapi.org/v2/everything?q=tesla&from=2024-02-28&sortBy=${by}&apiKey=2052ff93239e49bba1ef98e65c07da78`,
        }),
        getApi3: builder.query({
            query: (by) => `https://content.guardianapis.com/search?order-by=${by}&api-key=7a920b5c-5d61-4829-b676-9c6dddf32584`,
        }),
    }),
})

export const { useGetApi1Query, useGetApi2Query, useGetApi3Query, useGetSort1Query } = newsApi
