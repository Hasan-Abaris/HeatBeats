import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Helper to generate styled components
const createComponent = (baseClasses) => {
  return function Component({ className = '', ...props }) {
    return <div className={cn(baseClasses, className)} {...props} />;
  };
};

// Base components
const Card = createComponent(
  'rounded-xl border bg-card text-card-foreground shadow'
);
const CardHeader = createComponent(
  'flex flex-col items-center md:items-start space-y-1.5 p-6'
);
const CardTitle = createComponent('font-semibold leading-none tracking-tight');
const CardDescription = createComponent(
  'text-sm text-muted-foreground text-center md:text-start'
);
const CardContent = createComponent('p-6 pt-0');
const CardFooter = createComponent('flex items-center p-6 pt-0');

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
