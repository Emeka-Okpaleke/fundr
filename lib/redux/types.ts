// Dashboard related types
export interface RevenueData {
  month: string;
  value: number;
}

export interface AccountDetails {
  bank: string;
  accountNumber: string;
}

export interface DashboardData {
  accountDetails: AccountDetails;
  revenueData: RevenueData[];
  totalRevenue: number;
  percentageChange: number;
}

// Transaction related types
export type TransactionType = 'Transfer' | 'Withdrawal' | 'Deposit' | 'Request';
export type TransactionStatus = 'Processed' | 'Failed' | 'Pending';

export interface TransactionData {
  id: string;
  account: string;
  transactionId: string;
  type: TransactionType;
  date: string;
  time: string;
  status: TransactionStatus;
  amount: number;
}

// Pagination related types
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}
