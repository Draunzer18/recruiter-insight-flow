
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Analyzing resume..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-pulse"></div>
        <Loader2 className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{message}</h3>
        <p className="text-gray-600">This may take a few moments...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
