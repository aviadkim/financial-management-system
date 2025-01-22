import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { User, Phone, Mail, FileText, Clock, Briefcase } from 'lucide-react';

const PreviewInterface = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm">
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                תיעוד שיחה
              </button>
              <button className="bg-white border text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                עריכת פרטים
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Stats Cards */}
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

        {/* Notes Section */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-medium mb-3">הערות אחרונות</h3>
          <div className="bg-gray-50 rounded p-3 text-sm">
            <div className="text-gray-900">מעוניין בהשקעות ירוקות</div>
            <div className="text-gray-500 text-xs mt-1">15/01/2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewInterface;
