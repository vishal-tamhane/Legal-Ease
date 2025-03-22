
import React from 'react';
import { cn } from '@/lib/utils';

interface EFilingHeaderProps {
  className?: string;
}

const EFilingHeader: React.FC<EFilingHeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full  py-6 animate-fade-in", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary bg-primary/10 rounded-full animate-slide-down">
            Online E-filing Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight animate-slide-up">
            E-Filing Assistant
          </h1>
          <p className="max-w-[700px] text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
            Complete your case filing efficiently and accurately with our step-by-step process
          </p>
        </div>
      </div>
    </header>
  );
};

export default EFilingHeader;
