import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import { View, Theme } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSongSelect = (songId: string) => {
    setCurrentSongId(songId);
    setIsPlaying(true);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeClasses = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      gradient: 'from-purple-900 to-black',
      secondary: 'text-gray-400',
      hover: 'hover:bg-gray-800/50',
      surface: 'bg-gray-900/50',
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      gradient: 'from-purple-100 to-white',
      secondary: 'text-gray-600',
      hover: 'hover:bg-gray-100/50',
      surface: 'bg-gray-100/50',
    },
  };

  return (
    <div className={`h-screen ${themeClasses[theme].bg} ${themeClasses[theme].text} flex flex-col`}>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentView={currentView} 
          onNavigate={setCurrentView}
          theme={theme}
          onThemeToggle={toggleTheme}
        />
        <MainContent 
          view={currentView} 
          currentSongId={currentSongId}
          isPlaying={isPlaying}
          onSongSelect={handleSongSelect}
          onPlayPause={handlePlayPause}
          theme={theme}
        />
      </div>
      <Player 
        isPlaying={isPlaying} 
        onPlayPause={handlePlayPause}
        currentSongId={currentSongId}
        theme={theme}
      />
    </div>
  );
}