import React, { useState } from 'react';
import { User, FileText, Clock, Briefcase } from 'lucide-react';
import RecordingInterface from '../recording/RecordingInterface';
import ClientManager from '../clients/ClientManager';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">דני כהן</h1>
                <div className="flex gap-4 mt-2 text-gray-600">
                  <span>054-1234567</span>
                  <span>dani@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-6">
            {[
              { id: 'overview', label: 'סקירה כללית' },
              { id: 'clients', label: 'ניהול לקוחות' },
              { id: 'portfolio', label: 'תיק השקעות' },
              { id: 'recordings', label: 'הקלטות ותמלולים' },
              { id: 'history', label: 'היסטוריית פעילות' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'clients' && <ClientManager />}
        {activeTab === 'recordings' && <RecordingInterface isOpen={true} onClose={() => setActiveTab('overview')} />}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-gray-600">שווי תיק</div>
                    <div className="text-xl font-semibold mt-1">₪450,000</div>
                    <span className="text-sm text-green-600">+5.2%</span>
                  </div>
                  <Briefcase className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-gray-600">פגישה אחרונה</div>
                    <div className="text-xl font-semibold mt-1">15/01/2025</div>
                    <div className="text-sm text-gray-500">לפני שבוע</div>
                  </div>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-gray-600">מספר תמלולים</div>
                    <div className="text-xl font-semibold mt-1">12</div>
                    <div className="text-sm text-gray-500">3 החודש</div>
                  </div>
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TabsContainer;
