import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransactionData, TransactionStatus, TransactionType } from '../types';

interface TransactionsState {
  transactions: TransactionData[];
  selectedAccount: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: TransactionsState = {
  transactions: [
    {
      id: '1',
      account: '₦42,644',
      transactionId: 'TR-8403857902',
      type: 'Transfer',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Processed',
      amount: 42644
    },
    {
      id: '2',
      account: '₦25,471',
      transactionId: 'TR-8403857903',
      type: 'Withdrawal',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Failed',
      amount: 25471
    },
    {
      id: '3',
      account: '₦42,644',
      transactionId: 'TR-8403857904',
      type: 'Deposit',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Processed',
      amount: 42644
    },
    {
      id: '4',
      account: '₦25,471',
      transactionId: 'TR-8403857905',
      type: 'Request',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Failed',
      amount: 25471
    },
    {
      id: '5',
      account: '₦42,644',
      transactionId: 'TR-8403857906',
      type: 'Transfer',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Processed',
      amount: 42644
    },
    {
      id: '6',
      account: '₦25,471',
      transactionId: 'TR-8403857907',
      type: 'Transfer',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Failed',
      amount: 25471
    },
    {
      id: '7',
      account: '₦26,648',
      transactionId: 'TR-8403857908',
      type: 'Transfer',
      date: 'Feb 12, 2022',
      time: '10:30AM',
      status: 'Processed',
      amount: 26648
    },
  ],
  selectedAccount: 'all-accounts',
  dateRange: {
    startDate: 'June 6, 2023',
    endDate: 'Jan 15, 2024',
  },
  pagination: {
    currentPage: 1,
    totalPages: 3,
    totalItems: 20,
    itemsPerPage: 7,
  },
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<TransactionData[]>) => {
      state.transactions = action.payload;
    },
    setSelectedAccount: (state, action: PayloadAction<string>) => {
      state.selectedAccount = action.payload;
    },
    setDateRange: (state, action: PayloadAction<{ startDate: string; endDate: string }>) => {
      state.dateRange = action.payload;
    },
    setPagination: (state, action: PayloadAction<{
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    }>) => {
      state.pagination = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
});

export const {
  setTransactions,
  setSelectedAccount,
  setDateRange,
  setPagination,
  setPage,
  setLoading,
  setError
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
