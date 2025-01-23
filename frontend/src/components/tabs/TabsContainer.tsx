import React, { useState } from 'react';
import { User, FileText, Clock, Briefcase } from 'lucide-react';
import RecordingInterface from '../recording/RecordingInterface';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">דני כהן</h1>
              <div className="flex gap-4 mt-2 text-gray-600">
                <span>dani@example.com</span>
                <span>054-1234567</span>
              </div>
            </div>
          </div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setActiveTab('recordings')}
          >
            תיעוד שיחה
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'סקירה כללית' },
              { id: 'portfolio', label: 'תיק השקעות' },
              { id: 'recordings', label: 'הקלטות ותמלולים' },
              { id: 'history', label: 'היסטוריית פעילות' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-gray-600">שווי תיק</div>
                  <div className="text-2xl font-bold mt-1">₪450,000</div>
                  <div className="text-green-500">+5.2%</div>
                </div>
                <Briefcase className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-gray-600">פגישה אחרונה</div>
                  <div className="text-2xl font-bold mt-1">15/01/2025</div>
                  <div className="text-gray-500">לפני שבוע</div>
                </div>
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-gray-600">מספר תמלולים</div>
                  <div className="text-2xl font-bold mt-1">12</div>
                  <div className="text-gray-500">3 החודש</div>
                </div>
                <FileText className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recordings' && <RecordingInterface isOpen={true} onClose={() => setActiveTab('overview')} />}
      </main>
    </div>
  );
};

export default TabsContainer;
