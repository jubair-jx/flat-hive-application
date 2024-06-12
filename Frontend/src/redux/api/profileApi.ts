import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: `/profile/get-my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    updateProfile: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/profile/update-info`,
          method: "PUT",
          data,
        };
      },
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation } = profileApi;
