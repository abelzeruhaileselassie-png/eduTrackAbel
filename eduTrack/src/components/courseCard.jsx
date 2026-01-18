
import React from 'react';
import { FiCheckCircle, FiLoader } from 'react-icons/fi'; // Importing Feather Icons

const CourseCard = ({ course }) => {
  // Map priority strings to Tailwind background and text colors
  const priorityColors = {
    High: 'bg-red-100 text-red-800',
    Medium: 'bg-blue-100 text-blue-800',
    Low: 'bg-indigo-100 text-indigo-800',
  };
  const badgeStyle = priorityColors[course.priority] || 'bg-gray-100 text-gray-800';
  
  // Status configuration with visual cues
  const statusConfig = course.isCompleted 
    ? { 
        color: 'text-green-600', 
        text: 'Completed',
        icon: <FiCheckCircle className="inline mr-1" size={16} />
      }
    : { 
        color: 'text-yellow-500', 
        text: 'In Progress',
        icon: <FiLoader className="inline mr-1 animate-spin" size={16} />
      };

  return (
    <div className="bg-gray-600 text-white rounded-lg shadow-md p-4 relative">
      {/* Priority Badge - positioned absolutely top right */}
      <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${badgeStyle}`}>
        {course.priority}
      </span>

      <h3 className="text-lg text-blue-100 font-semibold mb-2">{course.name}</h3>
      
      {/* Status indicator with visual cue */}
      <div className={`flex items-center mb-3 text-sm font-medium ${statusConfig.color}`}>
        {statusConfig.icon}
        Status: {statusConfig.text}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className={`h-2 rounded-full ${course.isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>

      {/* Conditional Button: Render only if not completed */}
      {!course.isCompleted && (
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          Continue Learning
        </button>
      )}
    </div>
  );
};

export default CourseCard;

