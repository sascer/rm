import React, { useState } from 'react';
import { Play, Pause, Clock } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: "Radio Miseria - En Vivo",
    type: "Streaming",
    duration: "En Vivo",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Música Independiente",
    type: "Programa",
    duration: "2:00:00",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Noticias Alternativas",
    type: "Programa",
    duration: "1:30:00",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Cultura Underground",
    type: "Programa",
    duration: "1:45:00",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Voces de la Ciudad",
    type: "Programa",
    duration: "1:15:00",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Arte y Resistencia",
    type: "Programa",
    duration: "2:30:00",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Poesía en las Calles",
    type: "Programa",
    duration: "1:00:00",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    title: "Música Experimental",
    type: "Programa",
    duration: "2:15:00",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 9,
    title: "Historias de la Noche",
    type: "Programa",
    duration: "1:45:00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 10,
    title: "Crónicas Urbanas",
    type: "Programa",
    duration: "2:00:00",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 11,
    title: "Sonidos del Subsuelo",
    type: "Programa",
    duration: "1:30:00",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 12,
    title: "Voces Rebeldes",
    type: "Programa",
    duration: "2:15:00",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const MainContent = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

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
              onMouseEnter={() => setHoveredId(1)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handlePlay(1)}
            >
              <div className="relative">
                <img
                  src={episodes[0].image}
                  alt={episodes[0].title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                  {playingId === 1 ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
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
                onMouseEnter={() => setHoveredId(episode.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handlePlay(episode.id)}
              >
                <div className="relative">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full aspect-square object-cover rounded-md mb-4"
                  />
                  <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                    {playingId === episode.id ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
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