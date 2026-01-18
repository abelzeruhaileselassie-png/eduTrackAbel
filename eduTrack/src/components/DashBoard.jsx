 import React from 'react';
 import CourseCard from './courseCard.jsx'; 
 import courseData from './data.jsx'; 


const Dashboard = ({ username }) => {
  const enrolledCoursesCount = courseData.length;

  return (
    
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">EduTrack Dashboard</h1>
            <p className="text-gray-600">Welcome back, {username}!</p>
          </div>
          
          {/* Enrolled Courses Badge */}
          <span className="bg-gray-600 text-blue-100 font-semibold py-2 px-4 rounded-lg ">
            {enrolledCoursesCount} Courses Enrolled
          </span>
        </div>
        
        {/* Grid layout for course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
