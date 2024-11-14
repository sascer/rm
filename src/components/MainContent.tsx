import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { episodes } from '../data/episodes';

const MainContent = () => {
  const { currentEpisode, isPlaying, playEpisode } = useAudio();

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-zinc-900 dark:from-zinc-800 dark:to-zinc-900">
      <div className="px-8 py-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Radio Miseria</h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">En Vivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              className="bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800/70 transition group cursor-pointer"
              onClick={() => playEpisode(episodes[0])}
            >
              <div className="relative">
                <img
                  src={episodes[0].image}
                  alt={episodes[0].title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                  {currentEpisode?.id === episodes[0].id && isPlaying ? 
                    <Pause className="w-6 h-6" /> : 
                    <Play className="w-6 h-6" />
                  }
                </button>
              </div>
              <h3 className="text-white font-semibold">{episodes[0].title}</h3>
              <p className="text-zinc-400 text-sm">{episodes[0].type}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Programación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {episodes.slice(1).map((episode) => (
              <div
                key={episode.id}
                className="bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800/70 transition group cursor-pointer"
                onClick={() => playEpisode(episode)}
              >
                <div className="relative">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full aspect-square object-cover rounded-md mb-4"
                  />
                  <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                    {currentEpisode?.id === episode.id && isPlaying ? 
                      <Pause className="w-6 h-6" /> : 
                      <Play className="w-6 h-6" />
                    }
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-semibold">{episode.title}</h3>
                    <p className="text-zinc-400 text-sm">{episode.type}</p>
                  </div>
                  <span className="text-zinc-400 text-sm">{episode.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;