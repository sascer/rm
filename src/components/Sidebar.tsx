import React from 'react';
import { Home, Search, Library, ChevronLeft, Radio, Sun, Moon } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-black flex flex-col transition-all duration-300 relative`}>
      <button
        onClick={toggleSidebar}
        className="absolute -right-4 top-6 bg-black p-2 rounded-full z-50"
      >
        <ChevronLeft className={`w-4 h-4 text-white transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className="p-6">
        <div className="flex items-center gap-4 text-zinc-200">
          <Radio className="w-8 h-8" />
          {isOpen && <span className="font-bold text-xl">Radio Miseria</span>}
        </div>

        <nav className="mt-10 space-y-4">
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Home className="w-6 h-6" />
            {isOpen && <span>Inicio</span>}
          </a>
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
            {isOpen && <span>Buscar</span>}
          </a>
          <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
            <Library className="w-6 h-6" />
            {isOpen && <span>Tu Biblioteca</span>}
          </a>
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          {isOpen && <span>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;