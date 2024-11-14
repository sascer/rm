import { useState } from 'react';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="h-20 bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="/radio-miseria-logo.png"
            alt="Now Playing"
            className="w-12 h-12 rounded"
          />
          <div>
            <h3 className="font-medium">Radio Miseria</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">En Vivo</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full"
          >
            {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full"
          >
            {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            className="w-24"
            onChange={(e) => setIsMuted(Number(e.target.value) === 0)}
          />
        </div>
      </div>
    </div>
  );
}