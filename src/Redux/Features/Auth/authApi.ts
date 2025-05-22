import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    updatePasword: builder.mutation({
      query: (data) => ({
        url: "/auth/update-password",
        method: "PUT",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/users/create-new-user",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useUpdatePaswordMutation, useRegisterMutation } =
  authApi;
