import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlatRequest: build.mutation({
      query: (requestData) => ({
        url: `/bookings/create-booking`,
        method: "POST",
        data: requestData,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getAllFlatRquest: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/bookings/booking-application`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.booking],
    }),
    getMyFlatRequest: build.query({
      query: () => ({
        url: `/bookings/my-booking-application`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateRequestById: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/bookings/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useCreateFlatRequestMutation,
  useGetAllFlatRquestQuery,
  useUpdateRequestByIdMutation,
  useGetMyFlatRequestQuery,
} = bookingApi;
