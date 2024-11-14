import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(66);

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.round((x / rect.width) * 100);
    setVolume(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="h-24 bg-gradient-to-r from-zinc-800 to-zinc-900 border-t border-zinc-700 px-4 flex items-center justify-between dark:text-white">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Now playing"
          className="w-16 h-16 rounded"
        />
        <div>
          <h3 className="font-semibold">Radio Miseria - En Vivo</h3>
          <p className="text-sm text-zinc-400">Streaming</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <SkipBack className="w-5 h-5 text-zinc-200 cursor-pointer hover:text-white" />
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <SkipForward className="w-5 h-5 text-zinc-200 cursor-pointer hover:text-white" />
        </div>
        <div className="w-96 h-1 rounded-full bg-zinc-600 cursor-pointer">
          <div className="w-1/3 h-full rounded-full bg-green-500"></div>
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
            style={{ width: `${volume}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Player;