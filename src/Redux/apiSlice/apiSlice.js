import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getApi1: builder.query({
            query: () => `https://newsapi.org/v2/everything?q=tesla&from=2024-02-26&sortBy=publishedAt&apiKey=2052ff93239e49bba1ef98e65c07da78`,
        }),
        getApi2: builder.query({
            query: () => `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2052ff93239e49bba1ef98e65c07da78`,
        }),
        getApi3: builder.query({
            query: () => `https://content.guardianapis.com/search?&api-key=7a920b5c-5d61-4829-b676-9c6dddf32584`,
        }),
    }),
})

export const { useGetApi1Query, useGetApi2Query, useGetApi3Query, useGetSort1Query } = newsApi
