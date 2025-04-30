import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth-token');
    if (token) headers.set('x-access-token', token);

    return headers;
  }
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['CurrentUser', 'Users', 'Folder', 'Files'],
  endpoints: (builder) => ({
    // auth
    getCurrentUser: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET'
      }),
      providesTags: ['CurrentUser']
    }),
    login: builder.query({
      query: (data) => ({
        url: '/public/sign-in',
        method: 'POST',
        body: data
      }),
      providesTags: ['CurrentUser']
    }),

    // Users
    listUsers: builder.query({
      query: () => ({
        url: '/user/list',
        method: 'GET'
      }),
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: '/user/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Users']
    }),
    updateProfilePicture: builder.mutation({
      query: (data) => ({
        url: '/user/updateProfilePicture',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['CurrentUser', 'Users']
    }),
    editUser: builder.mutation({
      query: (data) => ({
        url: '/user/edit',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['CurrentUser', 'Users']
    }),
    removeUser: builder.mutation({
      query: (data) => ({
        url: '/user/remove',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['CurrentUser', 'Users']
    }),
    getUserById: builder.query({
      query: (data) => ({
        url: '/user/getOneById',
        method: 'POST',
        body: data
      }),
      providesTags: ['Users']
    }),

    // Files & Folders
    createFolder: builder.mutation({
      query: (data) => ({
        url: '/folder/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Folder']
    }),
    getAllFolders: builder.query({
      query: () => ({
        url: '/folder/all',
        method: 'GET'
      }),
      providesTags: ['Folder', 'Files']
    }),
    addFiles: builder.mutation({
      query: (data) => ({
        url: '/file/add',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Folder', 'Files']
    }),
    getRecentFiles: builder.query({
      query: () => ({
        url: '/file/getRecent',
        method: 'GET'
      }),
      providesTags: ['Folder', 'Files']
    }),
    getAllFiles: builder.query({
      query: () => ({
        url: '/file/getAll',
        method: 'GET'
      }),
      providesTags: ['Folder', 'Files']
    })
  })
});

export const {
  useListUsersQuery,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useLazyLoginQuery,
  useCreateUserMutation,
  useUpdateProfilePictureMutation,
  useEditUserMutation,
  useRemoveUserMutation,
  useGetUserByIdQuery,
  useCreateFolderMutation,
  useAddFilesMutation,
  useGetAllFoldersQuery,
  useGetRecentFilesQuery,
  useGetAllFilesQuery
} = api;
