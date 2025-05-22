import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/order/get-orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ _id, status }) => ({
        url: `/order/change-order-status/${_id}?status=${status}`,
        method: "PATCH",
      }),
    }),
    verifyOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/verify-order?order_id=${orderId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Orders"],
    }),
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/order/create-order",
          method: "POST",
          body: data,
        };
      },
    }),
    getCustomerOrders: builder.query({
      query: () => ({
        url: `/order/get-customer-orders`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useVerifyOrderMutation,
  useCreateOrderMutation,
  useGetCustomerOrdersQuery,
} = orderApi;
