import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

const Player = () => {
  const { 
    currentEpisode, 
    isPlaying, 
    progress, 
    volume,
    togglePlay, 
    setVolume,
    seekTo 
  } = useAudio();

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setVolume(percentage);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    seekTo(percentage);
  };

  if (!currentEpisode) return null;

  return (
    <div className="h-24 bg-gradient-to-r from-zinc-800 to-zinc-900 border-t border-zinc-700 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-4">
        <img
          src={currentEpisode.image}
          alt={currentEpisode.title}
          className="w-16 h-16 rounded"
        />
        <div>
          <h3 className="font-semibold">{currentEpisode.title}</h3>
          <p className="text-sm text-zinc-400">{currentEpisode.type}</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <SkipBack className="w-5 h-5 text-zinc-200 cursor-pointer hover:text-white" />
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <SkipForward className="w-5 h-5 text-zinc-200 cursor-pointer hover:text-white" />
        </div>
        <div 
          className="w-96 h-1 rounded-full bg-zinc-600 cursor-pointer"
          onClick={handleSeek}
        >
          <div 
            className="h-full rounded-full bg-green-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Volume2 className="w-5 h-5" />
        <div 
          className="w-24 h-1 rounded-full bg-zinc-600 cursor-pointer"
          onClick={handleVolumeChange}
        >
          <div 
            className="h-full rounded-full bg-white transition-all duration-150"
            style={{ width: `${volume * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Player;