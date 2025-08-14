// Comprehensive mock for @/components/ui/* components
import React from 'react';

// Button components
export const Button = ({ children, className, variant, size, ...props }) => (
  <button className={className} data-testid="ui-button" {...props}>
    {children}
  </button>
);

// Card components
export const Card = ({ children, className, ...props }) => (
  <div className={className} data-testid="ui-card" {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={className} data-testid="ui-card-content" {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className, ...props }) => (
  <div className={className} data-testid="ui-card-header" {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={className} data-testid="ui-card-title" {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className, ...props }) => (
  <p className={className} data-testid="ui-card-description" {...props}>
    {children}
  </p>
);

// Select components
export const Select = ({ children, value, onValueChange, ...props }) => (
  <div data-testid="ui-select" {...props}>
    {children}
  </div>
);

export const SelectContent = ({ children, ...props }) => (
  <div data-testid="ui-select-content" {...props}>
    {children}
  </div>
);

export const SelectItem = ({ children, value, ...props }) => (
  <div data-testid="ui-select-item" data-value={value} {...props}>
    {children}
  </div>
);

export const SelectTrigger = ({ children, className, ...props }) => (
  <button className={className} data-testid="ui-select-trigger" {...props}>
    {children}
  </button>
);

export const SelectValue = ({ placeholder, ...props }) => (
  <span data-testid="ui-select-value" {...props}>
    {placeholder}
  </span>
);

// Input components
export const Input = ({ className, type, ...props }) => (
  <input className={className} type={type} data-testid="ui-input" {...props} />
);

// Label component
export const Label = ({ children, className, ...props }) => (
  <label className={className} data-testid="ui-label" {...props}>
    {children}
  </label>
);

// Badge component
export const Badge = ({ children, className, variant, ...props }) => (
  <span className={className} data-testid="ui-badge" {...props}>
    {children}
  </span>
);

// Default export for any other UI components
const UIComponentMock = ({ children, ...props }) => (
  <div data-testid="ui-component-mock" {...props}>
    {children}
  </div>
);

export default UIComponentMock;
