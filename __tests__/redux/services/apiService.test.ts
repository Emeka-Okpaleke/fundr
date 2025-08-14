import { apiService } from '../../../lib/redux/services/apiService';
import { setupStore } from '../../../lib/redux/store';

describe('API Service', () => {
  describe('Endpoints', () => {
    it('has getDashboardData endpoint', () => {
      // Test the existence of the API endpoints
      expect(apiService.endpoints.getDashboardData).toBeDefined();
    });

    it('has getTransactions endpoint', () => {
      expect(apiService.endpoints.getTransactions).toBeDefined();
    });
  });
  
  describe('API Service Integration', () => {
    it('can be added to the store', () => {
      // Verify that the apiService can be properly integrated with the Redux store
      const store = setupStore();
      
      // Check that the reducer is properly added to the store
      const state = store.getState();
      expect(state[apiService.reducerPath]).toBeDefined();
      
      // Check that the middleware is properly added
      // Note: This is a simplistic check as we can't easily verify middleware
      expect(Object.keys(state).includes(apiService.reducerPath)).toBe(true);
    });
  });
  
  describe('API Query Integration', () => {
    it('apiService is correctly configured with reducerPath', () => {
      expect(apiService.reducerPath).toBe('api');
    });
    
    it('apiService has hooks for fetching data', () => {
      // Verify hooks are exported
      expect(typeof apiService.useGetDashboardDataQuery).toBe('function');
      expect(typeof apiService.useGetTransactionsQuery).toBe('function');
    });
  });
});
