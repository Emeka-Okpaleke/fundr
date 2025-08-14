import transactionsReducer, {
  setTransactions,
  setSelectedAccount,
  setDateRange,
  setPagination,
  setPage,
  setLoading,
  setError
} from '../../../lib/redux/features/transactionsSlice';
import { TransactionData, TransactionType, TransactionStatus } from '../../../lib/redux/types';

// Define the TransactionsState type locally to match the slice's internal type
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

describe('Transactions Slice', () => {
  const initialState: TransactionsState = {
    transactions: [
      {
        id: '1',
        account: 'Main Account',
        transactionId: 'TX123456',
        type: 'Deposit' as TransactionType,
        date: '2023-01-01',
        time: '10:30 AM',
        status: 'Processed' as TransactionStatus,
        amount: 500,
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

  it('should handle initial state', () => {
    expect(transactionsReducer(undefined, { type: 'unknown' })).toMatchObject({
      selectedAccount: 'all-accounts',
      loading: false,
      error: null
    });
  });

  it('should handle setTransactions', () => {
    const mockTransactions: TransactionData[] = [
      {
        id: '5',
        account: '₦50,000',
        transactionId: 'TR-9999999999',
        type: 'Deposit',
        date: 'Mar 15, 2022',
        time: '09:30AM',
        status: 'Processed',
        amount: 50000
      }
    ];
    
    const expectedState = {
      ...initialState,
      transactions: mockTransactions
    };

    expect(
      transactionsReducer(initialState, setTransactions(mockTransactions))
    ).toEqual(expectedState);
  });

  it('should handle setSelectedAccount', () => {
    const selectedAccount = 'access-bank';
    const expectedState = {
      ...initialState,
      selectedAccount
    };

    expect(
      transactionsReducer(initialState, setSelectedAccount(selectedAccount))
    ).toEqual(expectedState);
  });

  it('should handle setDateRange', () => {
    const dateRange = {
      startDate: 'Jan 1, 2022',
      endDate: 'Dec 31, 2022'
    };
    const expectedState = {
      ...initialState,
      dateRange
    };

    expect(
      transactionsReducer(initialState, setDateRange(dateRange))
    ).toEqual(expectedState);
  });

  it('should handle setPagination', () => {
    const pagination = {
      currentPage: 2,
      totalPages: 5,
      totalItems: 25,
      itemsPerPage: 5
    };
    const expectedState = {
      ...initialState,
      pagination
    };

    expect(
      transactionsReducer(initialState, setPagination(pagination))
    ).toEqual(expectedState);
  });

  it('should handle setPage', () => {
    const page = 3;
    const expectedState = {
      ...initialState,
      pagination: {
        ...initialState.pagination,
        currentPage: page
      }
    };

    expect(
      transactionsReducer(initialState, setPage(page))
    ).toEqual(expectedState);
  });

  it('should handle setLoading', () => {
    const loading = true;
    const expectedState = {
      ...initialState,
      loading
    };

    expect(
      transactionsReducer(initialState, setLoading(loading))
    ).toEqual(expectedState);
  });

  it('should handle setError', () => {
    const error = 'An error occurred';
    const expectedState = {
      ...initialState,
      error
    };

    expect(
      transactionsReducer(initialState, setError(error))
    ).toEqual(expectedState);
  });
});
