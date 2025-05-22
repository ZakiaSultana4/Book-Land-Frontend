import { baseApi } from "../../../api/baseApi";

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/get-all-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deactivateUser: builder.mutation({
      query: (id) => ({
        url: `/users/deactivate-user/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),

    activateUser: builder.mutation({
      query: (id) => ({
        url: `/users/activate-user/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeactivateUserMutation,
  useActivateUserMutation,
} = userManagementApi;
