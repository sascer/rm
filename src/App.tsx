import React from 'react';
import { Menu, Radio, Clock, ListMusic, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import { AudioProvider } from './context/AudioContext';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AudioProvider>
          <div className="h-screen flex flex-col dark:bg-zinc-900 transition-colors duration-300">
            <div className="flex-1 flex overflow-hidden">
              <Sidebar />
              <MainContent />
            </div>
            <Player />
          </div>
        </AudioProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;