import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mic, Phone, Upload, FileText, Mail, X, Check } from 'lucide-react';

interface RecordingInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

type TopicKey = 'needs_update' | 'risk_profile' | 'disclosures' | null;

interface Question {
  id: number;
  text: string;
  asked: boolean;
  timestamp: string | null;
  answer: string | null;
}

const RecordingInterface: React.FC<RecordingInterfaceProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicKey>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState('00:00:00');
  const [showRecordingOptions, setShowRecordingOptions] = useState(true);
  const [audioUpload, setAudioUpload] = useState<{file: File | null; status: string; progress: number}>({ file: null, status: 'idle', progress: 0 });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAudioUpload({ file, status: 'uploading', progress: 0 });
    setShowRecordingOptions(false);

    // יצירת נגן אודיו
    const audioUrl = URL.createObjectURL(file);
    const audio = new Audio(audioUrl);
    setAudioPlayer(audio);

    // התחלת תמלול
    setTimeout(() => {
      setAudioUpload(prev => ({ ...prev, status: 'processing', progress: 100 }));
      setIsRecording(true);
    }, 2000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      let seconds = 0;
      interval = setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        setTimer(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const topics = {
    'needs_update': {
      title: 'עדכון צרכים',
      questions: [
        { id: 1, text: 'האם חל שינוי מהותי בצרכים הפיננסיים?', asked: false, timestamp: null, answer: null },
        { id: 2, text: 'האם חלו שינויים במקום עבודה או הכנסה?', asked: false, timestamp: null, answer: null },
        { id: 3, text: 'האם השתנו צרכי הנזילות?', asked: false, timestamp: null, answer: null }
      ]
    },
    'risk_profile': {
      title: 'פרופיל סיכון',
      questions: [
        { id: 4, text: 'האם רמת הסיכון הנוכחית מתאימה?', asked: false, timestamp: null, answer: null },
        { id: 5, text: 'האם יש שינוי בטווח ההשקעה?', asked: false, timestamp: null, answer: null }
      ]
    },
    'disclosures': {
      title: 'גילוי נאות',
      questions: [
        { id: 6, text: 'האם הוצגו כל הזיקות למוצרים?', asked: false, timestamp: null, answer: null },
        { id: 7, text: 'האם הוסברו כל העמלות והעלויות?', asked: false, timestamp: null, answer: null }
      ]
    }
  } as const;

  // נגן אודיו
  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const transcriptData = [
    { 
      id: 1, 
      speaker: 'advisor',
      text: 'שלום דני, מה שלומך? אני רוצה לעדכן אותך לגבי השינויים בתיק ההשקעות.',
      time: '10:30:15',
      topic: 'needs_update'
    },
    { 
      id: 2, 
      speaker: 'client',
      text: 'היי, כן בשמחה. מה השינויים?',
      time: '10:30:20'
    }
  ];

  const RecordingOptions = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">בחר אפשרות תיעוד</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="p-6 border rounded-lg text-right hover:bg-blue-50 hover:border-blue-200 transition-all"
            onClick={() => {
              setShowRecordingOptions(false);
              setIsRecording(true);
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium mb-1">הקלטת שיחה חיה</div>
                <div className="text-sm text-gray-500">תמלול והקלטה בזמן אמת</div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                זיהוי דוברים אוטומטי
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                תמלול בזמן אמת
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                סימון שאלות אוטומטי
              </li>
            </ul>
          </button>

          <button 
            className="p-6 border rounded-lg text-right hover:bg-blue-50 hover:border-blue-200 transition-all"
            onClick={() => document.getElementById('audio-upload')?.click()}
          >
            <input
              id="audio-upload"
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium mb-1">העלאת הקלטה</div>
                <div className="text-sm text-gray-500">עיבוד הקלטה קיימת</div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                תמיכה בכל סוגי הקבצים
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                זיהוי דוברים
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                עיבוד מהיר
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">הקלטת שיחה - דני כהן</h2>
            {isRecording && (
              <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                מקליט... {timer}
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => document.getElementById('audio-upload')?.click()}
              className="px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Upload className="w-5 h-5" />
              העלאת הקלטה
              <input
                id="audio-upload"
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </button>
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                isRecording 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Mic className="w-5 h-5" />
              {isRecording ? 'עצור הקלטה' : 'התחל הקלטה'}
            </button>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-[300px_1fr_400px] h-[calc(100vh-73px)]">
        {/* Questions Panel */}
        <div className="bg-white border-l overflow-y-auto">
          <div className="p-4">
            <h3 className="font-medium text-lg mb-4">נושאי שיחה ושאלות</h3>
            <div className="space-y-3">
              {(Object.entries(topics) as [TopicKey, typeof topics[keyof typeof topics]][]).map(([key, topic]) => (
                <div key={key} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                    onClick={() => setSelectedTopic(selectedTopic === key ? null : key)}
                  >
                    <div className="font-medium">{topic.title}</div>
                    {selectedTopic === key ? 
                      <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    }
                  </button>
                  
                  {selectedTopic === key && (
                    <div className="p-3 border-t space-y-2">
                      {topic.questions.map(question => (
                        <div 
                          key={question.id}
                          className={`p-3 rounded-lg text-sm ${
                            question.asked 
                              ? 'bg-green-50 border border-green-200' 
                              : 'bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {question.asked && (
                              <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            )}
                            <div>
                              <p>{question.text}</p>
                              {question.asked && question.timestamp && (
                                <div className="text-xs text-green-600 mt-1">
                                  <div>נשאלה ב-{question.timestamp}</div>
                                  {question.answer && (
                                    <div className="mt-1 text-gray-600">
                                      תשובה: {question.answer}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transcription Area */}
        <div className="bg-white border-l p-4 overflow-y-auto">
          {audioPlayer && (
            <div className="mb-4 flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                className="px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isPlaying ? 'עצור': 'נגן'}
              </button>
              <div className="text-sm text-gray-600">קובץ: {audioUpload.file?.name}</div>
            </div>
          )}
          <div>
            <h3 className="font-medium text-lg mb-4">תמלול שיחה</h3>
            <div className="space-y-4">
              {transcriptData.map(entry => (
                <div key={entry.id} className="flex items-start gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                    entry.speaker === 'advisor' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {entry.speaker === 'advisor' ? 'יועץ' : 'לקוח'}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900">{entry.text}</div>
                    <div className="text-xs text-gray-500 mt-1">{entry.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="bg-white p-4 overflow-y-auto">
          <h3 className="font-medium text-lg mb-4">סיכום ופעולות</h3>
          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700">פעולות מהירות</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 transition-colors">
                  <FileText className="w-4 h-4" />
                  יצירת סיכום
                </button>
                <button className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 transition-colors">
                  <Mail className="w-4 h-4" />
                  שליחת מייל
                </button>
              </div>
            </div>

            {/* Automatic Summary */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700">סיכום אוטומטי</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• עדכון על שינויים בתיק ההשקעות</li>
                  <li>• שאלות שנענו: 2/7</li>
                  <li>• נושאים שכוסו: 1/3</li>
                </ul>
              </div>
            </div>

            {/* Email Preview */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700">טיוטת מייל</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">נמען</label>
                  <input
                    type="text"
                    value="dani@example.com"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">נושא</label>
                  <input
                    type="text"
                    defaultValue="סיכום פגישה - 22/01/2025"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">תוכן</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg text-sm h-32 resize-none"
                    defaultValue={`שלום דני,

תודה על השיחה היום. להלן סיכום הנקודות העיקריות שעלו בשיחתנו:

1. עדכון על שינויים בתיק ההשקעות
2. דיון על צרכים פיננסיים עדכניים

נשמח לעמוד לרשותך בכל שאלה נוספת.

בברכה,
יועץ ההשקעות שלך`}
                  />
                </div>
              </div>
            </div>
            
            {/* Action Items */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700">משימות להמשך</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>שליחת סיכום פגישה במייל</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>עדכון פרופיל סיכון במערכת</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>תיאום פגישת המשך בעוד חודש</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingInterface;