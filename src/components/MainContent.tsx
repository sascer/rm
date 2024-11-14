import React from 'react';
import { Play, Clock } from 'lucide-react';

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
  }
];

const MainContent = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-zinc-900 dark:from-zinc-800 dark:to-zinc-900">
      <div className="px-8 py-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Radio Miseria</h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">En Vivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800/70 transition group">
              <div className="relative">
                <img
                  src={episodes[0].image}
                  alt={episodes[0].title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-white font-semibold">{episodes[0].title}</h3>
              <p className="text-zinc-400 text-sm">{episodes[0].type}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Programación</h2>
          <div className="bg-zinc-900/60 rounded-lg">
            <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-2 text-zinc-400 text-sm">
              <span className="w-8">#</span>
              <span>TÍTULO</span>
              <Clock className="w-5 h-5" />
            </div>
            <div className="divide-y divide-zinc-800">
              {episodes.slice(1).map((episode, index) => (
                <div
                  key={episode.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-3 hover:bg-zinc-800/50 group transition"
                >
                  <span className="w-8 text-zinc-400">{index + 1}</span>
                  <div className="flex items-center gap-4">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-12 h-12 rounded"
                    />
                    <div>
                      <h3 className="text-white font-medium">{episode.title}</h3>
                      <p className="text-sm text-zinc-400">{episode.type}</p>
                    </div>
                  </div>
                  <span className="text-zinc-400">{episode.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;