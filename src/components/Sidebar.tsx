import { FiMenu, FiHome, FiRadio, FiCalendar } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-100 dark:bg-gray-800 transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
        >
          <FiMenu size={24} />
        </button>
        {isOpen && <h1 className="font-bold text-xl">Radio Miseria</h1>}
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiHome size={24} />
              {isOpen && <span className="ml-3">Inicio</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiRadio size={24} />
              {isOpen && <span className="ml-3">En Vivo</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiCalendar size={24} />
              {isOpen && <span className="ml-3">Programación</span>}
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        <button
          onClick={toggleTheme}
          className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg w-full"
        >
          {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          {isOpen && (
            <span className="ml-3">{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
          )}
        </button>
      </div>
    </div>
  );
}