// Mock for next/navigation
export const useRouter = jest.fn().mockReturnValue({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  pathname: "/",
  query: {}
});

export const useSearchParams = jest.fn().mockReturnValue({
  get: jest.fn(),
  getAll: jest.fn(),
  has: jest.fn(),
  forEach: jest.fn(),
  entries: jest.fn(),
  keys: jest.fn(),
  values: jest.fn(),
  toString: jest.fn()
});

export const usePathname = jest.fn().mockReturnValue("/");
