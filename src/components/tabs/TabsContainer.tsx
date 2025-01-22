import React, { useState } from 'react';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, title: 'הקלטות ותמלול' },
    { id: 1, title: 'ניהול לקוחות' },
    { id: 2, title: 'מעקב פעולות' }
  ];

  return (
    <div className="w-full">
      <div className="flex border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="p-4">
        {activeTab === 0 && <div>תוכן הקלטות ותמלול</div>}
        {activeTab === 1 && <div>תוכן ניהול לקוחות</div>}
        {activeTab === 2 && <div>תוכן מעקב פעולות</div>}
      </div>
    </div>
  );
};

export default TabsContainer;
