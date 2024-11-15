import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Repeat, Shuffle, Heart, Link } from 'lucide-react';
import { Theme } from '../types';

interface PlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentSongId: string | null;
  theme: Theme;
}

export default function Player({ isPlaying, onPlayPause, currentSongId, theme }: PlayerProps) {
  const themeClasses = {
    dark: {
      bg: 'from-gray-900 to-black',
      border: 'border-gray-800',
      text: 'text-white',
      secondary: 'text-gray-400',
      surface: 'bg-gray-600',
      progress: 'bg-white',
    },
    light: {
      bg: 'from-gray-100 to-white',
      border: 'border-gray-200',
      text: 'text-gray-900',
      secondary: 'text-gray-600',
      surface: 'bg-gray-300',
      progress: 'bg-gray-900',
    },
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    console.log(`Volume set to ${percentage}%`);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    console.log(`Seek to ${percentage}%`);
  };

  return (
    <div className={`h-24 bg-gradient-to-r ${themeClasses[theme].bg} border-t ${themeClasses[theme].border} px-4 flex items-center justify-between`}>
      <div className="flex items-center w-1/3">
        {currentSongId && (
          <>
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop" 
              alt="Album cover" 
              className="w-16 h-16 rounded-md"
            />
            <div className="ml-4">
              <h4 className="text-sm font-semibold">Miseria Nocturna</h4>
              <p className={`text-xs ${themeClasses[theme].secondary}`}>Radio Miseria</p>
            </div>
            <div className="ml-4 flex gap-2">
              <button>
                <Heart className={`w-5 h-5 ${themeClasses[theme].secondary} hover:text-purple-500 transition`} />
              </button>
              <a 
                href="https://archive.org/details/miseria-nocturna"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses[theme].secondary} hover:text-purple-500 transition`}
              >
                <Link className="w-5 h-5" />
              </a>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center gap-4">
          <button>
            <Shuffle className={`w-5 h-5 ${themeClasses[theme].secondary} hover:text-current transition`} />
          </button>
          <button>
            <SkipBack className={`w-6 h-6 ${themeClasses[theme].secondary} hover:text-current transition`} />
          </button>
          <button 
            onClick={onPlayPause}
            className={`w-8 h-8 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} rounded-full flex items-center justify-center hover:scale-105 transition`}
            disabled={!currentSongId}
          >
            {isPlaying ? (
              <Pause className={`w-4 h-4 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
            ) : (
              <Play className={`w-4 h-4 ${theme === 'dark' ? 'text-black' : 'text-white'} ml-1`} />
            )}
          </button>
          <button>
            <SkipForward className={`w-6 h-6 ${themeClasses[theme].secondary} hover:text-current transition`} />
          </button>
          <button>
            <Repeat className={`w-5 h-5 ${themeClasses[theme].secondary} hover:text-current transition`} />
          </button>
        </div>
        <div className="w-full mt-2 flex items-center gap-2">
          <span className={`text-xs ${themeClasses[theme].secondary}`}>2:14</span>
          <div 
            className={`h-1 flex-1 ${themeClasses[theme].surface} rounded-full cursor-pointer`}
            onClick={handleSeek}
          >
            <div className={`h-1 w-1/3 ${themeClasses[theme].progress} rounded-full hover:bg-purple-500 transition`}></div>
          </div>
          <span className={`text-xs ${themeClasses[theme].secondary}`}>3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-1/3 justify-end">
        <Volume2 className={themeClasses[theme].secondary} />
        <div 
          className={`w-24 h-1 ${themeClasses[theme].surface} rounded-full cursor-pointer`}
          onClick={handleVolumeChange}
        >
          <div className={`h-1 w-2/3 ${themeClasses[theme].progress} rounded-full hover:bg-purple-500 transition`}></div>
        </div>
      </div>
    </div>
  );
}