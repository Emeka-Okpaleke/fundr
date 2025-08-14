// Mock for lucide-react icons
import React from 'react';

// Create a generic icon component
const createMockIcon = (name) => {
  const MockIcon = (props) => (
    <svg
      data-testid={`${name.toLowerCase()}-icon`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>{name}</title>
    </svg>
  );
  MockIcon.displayName = name;
  return MockIcon;
};

// Export commonly used icons
export const Copy = createMockIcon('Copy');
export const ChevronDown = createMockIcon('ChevronDown');
export const MoreHorizontal = createMockIcon('MoreHorizontal');
export const Plus = createMockIcon('Plus');
export const Search = createMockIcon('Search');
export const Bell = createMockIcon('Bell');
export const User = createMockIcon('User');
export const Settings = createMockIcon('Settings');
export const Home = createMockIcon('Home');
export const DollarSign = createMockIcon('DollarSign');
export const TrendingUp = createMockIcon('TrendingUp');
export const TrendingDown = createMockIcon('TrendingDown');
export const Calendar = createMockIcon('Calendar');
export const Filter = createMockIcon('Filter');
export const Download = createMockIcon('Download');
export const Upload = createMockIcon('Upload');
export const Eye = createMockIcon('Eye');
export const EyeOff = createMockIcon('EyeOff');
export const Edit = createMockIcon('Edit');
export const Trash = createMockIcon('Trash');
export const Check = createMockIcon('Check');
export const X = createMockIcon('X');
export const ArrowLeft = createMockIcon('ArrowLeft');
export const ArrowRight = createMockIcon('ArrowRight');
export const ArrowUp = createMockIcon('ArrowUp');
export const ArrowDown = createMockIcon('ArrowDown');

// Default export for any other icons
export default createMockIcon;
