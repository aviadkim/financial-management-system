import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NewClientFormProps {
 onClose: () => void;
 onSubmit: (data: any) => void;
}

const NewClientForm: React.FC<NewClientFormProps> = ({ onClose, onSubmit }) => {
 const [formData, setFormData] = useState({
   firstName: '',
   lastName: '',
   email: '',
   phone: '',
   id: '',
   riskProfile: 'medium',
   goals: '',
   comments: ''
 });

 return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
     <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
       <div className="flex justify-between items-center mb-6">
         <h3 className="text-xl font-semibold">הוספת לקוח חדש</h3>
         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
           <X className="w-6 h-6" />
         </button>
       </div>

       <form onSubmit={(e) => {
         e.preventDefault();
         onSubmit(formData);
       }}>
         <div className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm text-gray-600 mb-1">שם פרטי</label>
               <input
                 type="text"
                 className="w-full px-3 py-2 border rounded-lg"
                 value={formData.firstName}
                 onChange={e => setFormData({...formData, firstName: e.target.value})}
               />
             </div>
             <div>
               <label className="block text-sm text-gray-600 mb-1">שם משפחה</label>
               <input
                 type="text"
                 className="w-full px-3 py-2 border rounded-lg"
                 value={formData.lastName}
                 onChange={e => setFormData({...formData, lastName: e.target.value})}
               />
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm text-gray-600 mb-1">דוא"ל</label>
               <input
                 type="email"
                 className="w-full px-3 py-2 border rounded-lg"
                 value={formData.email}
                 onChange={e => setFormData({...formData, email: e.target.value})}
               />
             </div>
             <div>
               <label className="block text-sm text-gray-600 mb-1">טלפון</label>
               <input
                 type="tel"
                 className="w-full px-3 py-2 border rounded-lg"
                 value={formData.phone}
                 onChange={e => setFormData({...formData, phone: e.target.value})}
               />
             </div>
           </div>

           <div>
             <label className="block text-sm text-gray-600 mb-1">ת.ז</label>
             <input
               type="text"
               className="w-full px-3 py-2 border rounded-lg"
               value={formData.id}
               onChange={e => setFormData({...formData, id: e.target.value})}
             />
           </div>

           <div>
             <label className="block text-sm text-gray-600 mb-1">פרופיל סיכון</label>
             <select 
               className="w-full px-3 py-2 border rounded-lg"
               value={formData.riskProfile}
               onChange={e => setFormData({...formData, riskProfile: e.target.value})}
             >
               <option value="low">נמוך</option>
               <option value="medium">בינוני</option>
               <option value="high">גבוה</option>
             </select>
           </div>

           <div>
             <label className="block text-sm text-gray-600 mb-1">מטרות השקעה</label>
             <textarea
               className="w-full px-3 py-2 border rounded-lg h-24"
               value={formData.goals}
               onChange={e => setFormData({...formData, goals: e.target.value})}
             />
           </div>

           <div>
             <label className="block text-sm text-gray-600 mb-1">הערות</label>
             <textarea
               className="w-full px-3 py-2 border rounded-lg h-24"
               value={formData.comments}
               onChange={e => setFormData({...formData, comments: e.target.value})}
             />
           </div>
         </div>

         <div className="flex justify-end gap-3 mt-6">
           <button
             type="button"
             onClick={onClose}
             className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
           >
             ביטול
           </button>
           <button
             type="submit"
             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
           >
             הוספת לקוח
           </button>
         </div>
       </form>
     </div>
   </div>
 );
};

export default NewClientForm;
