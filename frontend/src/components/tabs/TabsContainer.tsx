import React, { useState } from 'react';
import { User, Phone, Mail, Clock, FileText, Briefcase } from 'lucide-react';
import RecordingInterface from '../recording/RecordingInterface';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('recordings');
  const [isRecordingOpen, setIsRecordingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">דני כהן</h1>
                <div className="flex gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>054-1234567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>dani@example.com</span>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsRecordingOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              תיעוד שיחה חדשה
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-6">
            {[
              { id: 'overview', label: 'סקירה כללית' },
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
        {activeTab === 'recordings' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <RecordingInterface 
              isOpen={isRecordingOpen} 
              onClose={() => setIsRecordingOpen(false)} 
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default TabsContainer;
