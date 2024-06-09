import { tagTypes } from "@/redux/tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (userData) => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
        data: userData,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    createAdmin: build.mutation({
      query: (adminData) => ({
        url: `${USER_URL}/create-admin`,
        method: "POST",
        data: adminData,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    getAllUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.users],
    }),
    getAllAdmin: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/admin/get-admins`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.users],
    }),
    updateNormalUserInfo: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/users/normal-user-info/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    updateAdminInfo: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/admin/admin-info/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    getUserById: build.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUserByIdQuery,
  useCreateAdminMutation,
  useGetAllUsersQuery,
  useUpdateAdminInfoMutation,
  useUpdateNormalUserInfoMutation,
  useGetAllAdminQuery,
} = usersApi;
