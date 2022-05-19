import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    fetchUserNames: builder.query<IUser[], string>({
      query(limit = "5") {
        console.log(limit);
        
        return `/users?limit=${limit}`;
      },
    }),
  }),
});
export const { useFetchUserNamesQuery } = apiSlice;
