import React, { useState } from 'react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('information');
  
  return (
    <div className="flex border-b border-gray-200 mt-2">
      <button 
        className={`flex-1 py-3 font-medium ${activeTab === 'information' 
          ? 'text-blue-500 border-b-2 border-blue-500' 
          : 'text-gray-500 hover:bg-gray-50'} transition-all`}
        onClick={() => setActiveTab('information')}
      >
        Información
      </button>
      <button 
        className={`flex-1 py-3 font-medium ${activeTab === 'pending'
          ? 'text-blue-500 border-b-2 border-blue-500'
          : 'text-gray-400 hover:bg-gray-50'} transition-all flex items-center justify-center gap-1`}
        onClick={() => setActiveTab('pending')}
      >
        <span>Pendiente</span>
        <span className="bg-gray-200 text-gray-600 text-xs px-1.5 py-0.5 rounded-full">En desarrollo</span>
      </button>
    </div>
  );
};

export default TabNavigation;
