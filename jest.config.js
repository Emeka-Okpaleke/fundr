const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/ui/(.*)$': '<rootDir>/__mocks__/ui-components.js',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^lucide-react$': '<rootDir>/__mocks__/lucide-react.js',
    '^next/navigation$': '<rootDir>/__mocks__/next-navigation.js',
    '^next/router$': '<rootDir>/__mocks__/next-router.js',
  },
}

module.exports = createJestConfig(customJestConfig)
