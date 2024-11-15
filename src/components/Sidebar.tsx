import React from 'react';
import { Home, Search, Library, Radio, Plus, Heart, Sun, Moon } from 'lucide-react';
import { View, Theme } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export default function Sidebar({ currentView, onNavigate, theme, onThemeToggle }: SidebarProps) {
  const themeClasses = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      secondary: 'text-gray-300',
      surface: 'bg-gray-900',
      button: 'bg-gray-900',
      buttonHover: 'hover:bg-gray-800',
      border: 'border-gray-800',
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      secondary: 'text-gray-600',
      surface: 'bg-gray-100',
      button: 'bg-gray-100',
      buttonHover: 'hover:bg-gray-200',
      border: 'border-gray-200',
    },
  };

  const getNavItemClass = (view: View) => 
    `flex items-center gap-4 transition cursor-pointer ${
      currentView === view ? themeClasses[theme].text : `${themeClasses[theme].secondary} hover:text-current`
    }`;

  return (
    <div className={`w-64 ${themeClasses[theme].bg} flex flex-col p-6`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Radio className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">Radio Miseria</span>
        </div>
        <button
          onClick={onThemeToggle}
          className={`p-2 rounded-full ${themeClasses[theme].button} ${themeClasses[theme].buttonHover} transition`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <nav className="space-y-4">
        <button 
          onClick={() => onNavigate('home')}
          className={getNavItemClass('home')}
        >
          <Home className="w-6 h-6" />
          <span>Inicio</span>
        </button>
        <button 
          onClick={() => onNavigate('search')}
          className={getNavItemClass('search')}
        >
          <Search className="w-6 h-6" />
          <span>Buscar</span>
        </button>
        <button 
          onClick={() => onNavigate('library')}
          className={getNavItemClass('library')}
        >
          <Library className="w-6 h-6" />
          <span>Tu Biblioteca</span>
        </button>
      </nav>

      <div className={`mt-8 pt-8 border-t ${themeClasses[theme].border}`}>
        <button className={`w-full flex items-center gap-2 p-2 ${themeClasses[theme].button} rounded-md ${themeClasses[theme].buttonHover} transition`}>
          <Plus className="w-5 h-5" />
          <span>Crear playlist</span>
        </button>
        <button className="w-full flex items-center gap-2 p-2 mt-2 bg-gradient-to-br from-purple-700 to-purple-900 rounded-md hover:from-purple-600 hover:to-purple-800 text-white transition">
          <Heart className="w-5 h-5" />
          <span>Tus Me Gusta</span>
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <button className="hover:text-current">Política de privacidad</button>
        <button className="hover:text-current block mt-2">Términos de uso</button>
      </div>
    </div>
  );
}