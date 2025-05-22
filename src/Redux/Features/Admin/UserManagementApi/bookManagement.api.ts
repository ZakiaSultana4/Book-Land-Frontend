import { baseApi } from "../../../api/baseApi";

const bookMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          Object.entries(args).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((val) => params.append(key, val));
            } else {
              params.append(key, value as string);
            }
          });
        }
        console.log("params", params);
        return {
          url: `/books/get-all-books`,
          method: "GET",
          params,
        };
      },
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/get-book/${id}`,
        method: "GET",
      }),
    }),

    publishBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-new-book",
        method: "POST",
        body: data,
      }),
    }),
    getNumberOfCategories: builder.query({
      query: () => ({
        url: "/books/category",
        method: "GET",
      }),
    }),
    getAuthors: builder.query({
      query: () => ({
        url: "/books/authors",
        method: "GET",
      }),
    }),
    deleteABook: builder.mutation({
      query: (params) => ({
        url: `/books/delete-book/${params}`,
        method: "PATCH",
      }),
    }),
    updateBookData: builder.mutation({
      query: ({ id, custommizedData }) => {
        console.log("from update", id, custommizedData);
        return {
          url: `/books/update-book/${id}`,
          method: "PUT",
          body: custommizedData,
        };
      },
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  usePublishBookMutation,
  useGetNumberOfCategoriesQuery,
  useGetAuthorsQuery,
  useDeleteABookMutation,
  useUpdateBookDataMutation,
} = bookMangementApi;
