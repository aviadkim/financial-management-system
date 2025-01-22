import React, { useState } from 'react';
import { User, Phone, Mail, Clock, FileText, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import RecordingInterface from '../recording/RecordingInterface';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
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
            <div className="flex gap-3">
              <button 
                onClick={() => setIsRecordingModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                תיעוד שיחה
              </button>
              <button className="bg-white border text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                עריכת פרטים
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
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

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Stats */}
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

            {/* Recent Notes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-lg mb-4">הערות אחרונות</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-900">מעוניין בהשקעות ירוקות</div>
                  <div className="text-xs text-gray-500 mt-1">15/01/2025</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-900">בקשה לבדיקת אפשרויות השקעה נוספות</div>
                  <div className="text-xs text-gray-500 mt-1">10/01/2025</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recordings' && (
          <RecordingInterface isOpen={isRecordingModalOpen} onClose={() => setIsRecordingModalOpen(false)} />
        )}

        {activeTab === 'portfolio' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">תיק השקעות</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">התפלגות השקעות</h3>
                <div className="text-sm text-gray-600">יוצג בקרוב...</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">ביצועים</h3>
                <div className="text-sm text-gray-600">יוצג בקרוב...</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">היסטוריית פעילות</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-sm text-gray-500">15/01/2025</div>
                <div className="mt-1">פגישת עדכון - סקירת תיק השקעות</div>
              </div>
              <div className="border-b pb-4">
                <div className="text-sm text-gray-500">10/01/2025</div>
                <div className="mt-1">עדכון פרטי קשר</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TabsContainer;
