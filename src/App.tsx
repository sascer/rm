import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <MainContent />
          <Player />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;