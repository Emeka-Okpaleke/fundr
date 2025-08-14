import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardData, RevenueData } from '../types';

interface DashboardState {
  accountDetails: {
    bank: string;
    accountNumber: string;
  };
  revenueData: RevenueData[];
  totalRevenue: number;
  percentageChange: number;
  timeFilter: '7days' | '30days' | '90days' | 'today';
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  accountDetails: {
    bank: 'STERLING BANK',
    accountNumber: '8000000000',
  },
  revenueData: [
    { month: "Jan", value: 280 },
    { month: "Feb", value: 450 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 280 },
    { month: "May", value: 120 },
    { month: "Jun", value: 180 },
    { month: "Jul", value: 160 },
    { month: "Aug", value: 180 },
    { month: "Sep", value: 140 },
    { month: "Oct", value: 180 },
    { month: "Nov", value: 220 },
    { month: "Dec", value: 160 },
  ],
  totalRevenue: 0,
  percentageChange: 0,
  timeFilter: '7days',
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setTimeFilter: (state, action: PayloadAction<'7days' | '30days' | '90days' | 'today'>) => {
      state.timeFilter = action.payload;
    },
    setDashboardData: (state, action: PayloadAction<DashboardData>) => {
      state.accountDetails = action.payload.accountDetails;
      state.revenueData = action.payload.revenueData;
      state.totalRevenue = action.payload.totalRevenue;
      state.percentageChange = action.payload.percentageChange;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
});

export const { setTimeFilter, setDashboardData, setLoading, setError } = dashboardSlice.actions;
export default dashboardSlice.reducer;
