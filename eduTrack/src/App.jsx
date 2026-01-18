import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/DashBoard'
import './index.css'; 
import React from 'react';



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <header className="bg-gray-600  text-center text-yellow-500 p-4 shadow-md">
          <span className="text-xl font-bold">EduTrack: Student Dashboard </span>
      </header>
      
      <main>
        <Dashboard username="Abel zeru" /> 
      </main>
    </div>
  );
}

export default App;


