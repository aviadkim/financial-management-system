import React, { useState } from 'react';
import { User, Phone, Mail, Plus, Search } from 'lucide-react';
import NewClientForm from './NewClientForm';

interface Client {
 id: string;
 name: string;
 email: string;
 phone: string;
 needs_assessment: {
   financial_goals: string;
   risk_tolerance: string;
   investment_horizon: string;
   last_updated: string;
 };
}

const ClientManager: React.FC = () => {
 const [showNewClientForm, setShowNewClientForm] = useState(false);
 const [clients, setClients] = useState<Client[]>([
   {
     id: "1",
     name: "דני כהן",
     email: "dani@example.com",
     phone: "054-1234567",
     needs_assessment: {
       financial_goals: "חיסכון לטווח ארוך",
       risk_tolerance: "בינונית",
       investment_horizon: "5-10 שנים",
       last_updated: "22/01/2025"
     }
   }
 ]);

 const handleNewClient = (formData: any) => {
   const newClient: Client = {
     id: String(clients.length + 1),
     name: `${formData.firstName} ${formData.lastName}`,
     email: formData.email,
     phone: formData.phone,
     needs_assessment: {
       financial_goals: formData.goals,
       risk_tolerance: formData.riskProfile,
       investment_horizon: "טרם נקבע",
       last_updated: new Date().toLocaleDateString('he-IL')
     }
   };
   setClients([...clients, newClient]);
   setShowNewClientForm(false);
 };

 return (
   <div className="p-6">
     <div className="flex justify-between items-center mb-6">
       <h2 className="text-2xl font-bold">ניהול לקוחות</h2>
       <div className="flex gap-4">
         <div className="relative">
           <input
             type="text"
             placeholder="חיפוש לקוח..."
             className="pl-10 pr-4 py-2 border rounded-lg"
           />
           <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
         </div>
         <button 
           className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
           onClick={() => setShowNewClientForm(true)}
         >
           <Plus className="w-5 h-5" />
           לקוח חדש
         </button>
       </div>
     </div>

     <div className="grid grid-cols-3 gap-6">
       {clients.map(client => (
         <div key={client.id} className="bg-white rounded-lg shadow p-6">
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
               <User className="w-6 h-6 text-blue-600" />
             </div>
             <div className="flex-1">
               <h3 className="font-medium text-lg">{client.name}</h3>
               <div className="space-y-1 mt-2 text-sm text-gray-600">
                 <div className="flex items-center gap-2">
                   <Mail className="w-4 h-4" />
                   {client.email}
                 </div>
                 <div className="flex items-center gap-2">
                   <Phone className="w-4 h-4" />
                   {client.phone}
                 </div>
               </div>
               <div className="mt-4">
                 <h4 className="font-medium text-sm mb-2">בירור צרכים אחרון</h4>
                 <div className="text-sm text-gray-600">
                   <p>• מטרות: {client.needs_assessment.financial_goals}</p>
                   <p>• סיכון: {client.needs_assessment.risk_tolerance}</p>
                   <p>• אופק: {client.needs_assessment.investment_horizon}</p>
                   <p className="text-xs mt-2">עודכן: {client.needs_assessment.last_updated}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
     
     {showNewClientForm && (
       <NewClientForm 
         onClose={() => setShowNewClientForm(false)}
         onSubmit={handleNewClient}
       />
     )}
   </div>
 );
};

export default ClientManager;
