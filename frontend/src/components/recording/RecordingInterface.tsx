import React, { useState } from 'react';
import { Mic, ChevronDown, ChevronUp, FileText, Mail } from 'lucide-react';

const RecordingInterface = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4">
        <h2 className="text-xl font-semibold">הקלטת שיחה - דני כהן</h2>
      </div>
    </div>
  );
};

export default RecordingInterface;
