import React from 'react';
interface SkillBadgeProps {
  name: string;
  level: number;
  icon: string;
}
export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  icon
}) => {
  // This is a simplified version that doesn't actually use the icon parameter
  // In a real implementation, you would use appropriate icon components
  return <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] dark:from-[#FF9900] dark:to-[#FFAC33]" style={{
        width: `${level}%`
      }}></div>
      </div>
    </div>;
};