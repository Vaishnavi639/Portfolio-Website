import React from 'react';
interface StatusIndicatorProps {
  status: 'active' | 'warning' | 'error' | 'inactive';
}
export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status
}) => {
  const getColorClasses = () => {
    switch (status) {
      case 'active':
        return 'bg-[#00C851] shadow-[0_0_5px_#00C851]';
      case 'warning':
        return 'bg-[#FF9900] shadow-[0_0_5px_#FF9900]';
      case 'error':
        return 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,1)]';
      case 'inactive':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };
  return <div className={`w-3 h-3 rounded-full ${getColorClasses()}`} title={`Status: ${status}`} />;
};