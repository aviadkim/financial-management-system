import React from 'react';
import TabsContainer from '../components/tabs/TabsContainer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-container min-h-screen bg-gray-100">
      <header className="header bg-white shadow-sm">
        <h1 className="text-2xl font-bold p-4">מערכת ניהול פיננסי</h1>
      </header>
      
      <nav className="sidebar bg-white shadow-sm p-4">
        <ul className="space-y-3">
          <li className="cursor-pointer hover:text-blue-600">דשבורד</li>
          <li className="cursor-pointer hover:text-blue-600">לקוחות</li>
          <li className="cursor-pointer hover:text-blue-600">הקלטות</li>
          <li className="cursor-pointer hover:text-blue-600">הגדרות</li>
        </ul>
      </nav>
      
      <main className="main bg-white shadow-sm overflow-auto">
        <TabsContainer />
      </main>
      
      <aside className="alerts bg-white shadow-sm p-4">
        <h3 className="font-semibold mb-3">התראות</h3>
        <div className="text-sm text-gray-600">
          אין התראות חדשות
        </div>
      </aside>
      
      <footer className="footer bg-white shadow-sm p-4 text-center text-gray-600">
        <p>© 2025 מערכת ניהול פיננסי</p>
      </footer>
    </div>
  );
}
