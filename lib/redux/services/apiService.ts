import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  DashboardData, 
  TransactionData, 
  PaginatedResponse
} from '../types';

// Define the base API service
export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Dashboard', 'Transactions'],
  endpoints: (builder) => ({
    // Dashboard endpoints
    getDashboardData: builder.query<DashboardData, void>({
      query: () => '/dashboard',
      providesTags: ['Dashboard'],
    }),
    
    // Transactions endpoints
    getTransactions: builder.query<PaginatedResponse<TransactionData>, { page?: number; limit?: number; filter?: string }>({
      query: ({ page = 1, limit = 10, filter = '' }) => ({
        url: '/transactions',
        params: { page, limit, filter },
      }),
      providesTags: ['Transactions'],
    }),
  }),
});

// Export the auto-generated hooks
export const {
  useGetDashboardDataQuery,
  useGetTransactionsQuery,
} = apiService;
