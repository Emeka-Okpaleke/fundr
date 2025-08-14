import dashboardReducer, { 
  setTimeFilter, 
  setDashboardData,
  setLoading,
  setError
} from '../../../lib/redux/features/dashboardSlice';
import type { DashboardData } from '../../../lib/redux/types';

// Define the DashboardState type locally to match the slice's internal type
interface DashboardState {
  accountDetails: {
    bank: string;
    accountNumber: string;
  };
  revenueData: { month: string; value: number }[];
  totalRevenue: number;
  percentageChange: number;
  timeFilter: '7days' | '30days' | '90days' | 'today';
  loading: boolean;
  error: string | null;
}

describe('Dashboard Slice', () => {
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

  it('should handle initial state', () => {
    expect(dashboardReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setTimeFilter', () => {
    const timeFilter = '30days';
    const expectedState = {
      ...initialState,
      timeFilter
    };

    expect(
      dashboardReducer(initialState, setTimeFilter(timeFilter))
    ).toEqual(expectedState);
  });

  it('should handle setDashboardData', () => {
    const dashboardData: DashboardData = {
      accountDetails: {
        bank: 'ACCESS BANK',
        accountNumber: '1234567890',
      },
      revenueData: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 200 },
      ],
      totalRevenue: 300,
      percentageChange: 10.5,
    };

    const expectedState = {
      ...initialState,
      accountDetails: dashboardData.accountDetails,
      revenueData: dashboardData.revenueData,
      totalRevenue: dashboardData.totalRevenue,
      percentageChange: dashboardData.percentageChange,
    };

    expect(
      dashboardReducer(initialState, setDashboardData(dashboardData))
    ).toEqual(expectedState);
  });

  it('should handle setLoading', () => {
    const loading = true;
    const expectedState = {
      ...initialState,
      loading
    };

    expect(
      dashboardReducer(initialState, setLoading(loading))
    ).toEqual(expectedState);
  });

  it('should handle setError', () => {
    const error = 'An error occurred';
    const expectedState = {
      ...initialState,
      error
    };

    expect(
      dashboardReducer(initialState, setError(error))
    ).toEqual(expectedState);
  });
});
