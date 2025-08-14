import { http, HttpResponse } from 'msw';
import { DashboardData, PaginatedResponse, TransactionData } from '../redux/types';

// Mock dashboard data
const mockDashboardData: DashboardData = {
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
  totalRevenue: 2700, // Sum of revenue data
  percentageChange: 5.2,
};

// Mock transactions data
const mockTransactions: TransactionData[] = [
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
  {
    id: '8',
    account: '₦35,500',
    transactionId: 'TR-8403857909',
    type: 'Deposit',
    date: 'Feb 13, 2022',
    time: '11:45AM',
    status: 'Processed',
    amount: 35500
  },
  {
    id: '9',
    account: '₦19,800',
    transactionId: 'TR-8403857910',
    type: 'Withdrawal',
    date: 'Feb 14, 2022',
    time: '09:15AM',
    status: 'Pending',
    amount: 19800
  },
  {
    id: '10',
    account: '₦52,300',
    transactionId: 'TR-8403857911',
    type: 'Transfer',
    date: 'Feb 15, 2022',
    time: '14:20PM',
    status: 'Processed',
    amount: 52300
  },
];

export const handlers = [
  // Dashboard API endpoint
  http.get('/api/dashboard', () => {
    return HttpResponse.json(mockDashboardData);
  }),

  // Transactions API endpoint with pagination support
  http.get('/api/transactions', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || '1');
    const limit = Number(url.searchParams.get('limit') || '7');
    const filter = url.searchParams.get('filter') || '';
    
    let filteredTransactions = [...mockTransactions];
    
    // Apply filter 
    if (filter && filter !== 'all-accounts') {
      filteredTransactions = mockTransactions.filter(t => 
        t.type.toLowerCase().includes(filter.toLowerCase())
      );
    }
    
    // Calculate pagination
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    const paginatedData = filteredTransactions.slice(startIdx, endIdx);
    
    const response: PaginatedResponse<TransactionData> = {
      data: paginatedData,
      meta: {
        currentPage: page,
        totalPages: Math.ceil(filteredTransactions.length / limit),
        totalItems: filteredTransactions.length,
        itemsPerPage: limit
      }
    };
    
    return HttpResponse.json(response);
  }),
];
