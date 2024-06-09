import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

export const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (flatData: any) => ({
        url: `/flats/create-flat`,
        method: "POST",
        data: flatData,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/flats`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.flat],
    }),
    getMyFlat: build.query({
      query: () => ({
        url: `/flats/get-my-flat`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    deleteFlatById: build.mutation({
      query: (id) => ({
        url: `/flats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    updateFlatById: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/flats/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.flat],
    }),
    getFlatById: build.query({
      query: (id: string) => ({
        url: `/flats/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatsQuery,
  useGetMyFlatQuery,
  useUpdateFlatByIdMutation,
  useGetFlatByIdQuery,
  useDeleteFlatByIdMutation,
} = flatApi;
