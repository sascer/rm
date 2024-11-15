import React from 'react';
import { Play, Pause, Clock, Heart, Link } from 'lucide-react';
import { View, Song, Playlist, Theme } from '../types';

interface MainContentProps {
  view: View;
  currentSongId: string | null;
  isPlaying: boolean;
  onSongSelect: (songId: string) => void;
  onPlayPause: () => void;
  theme: Theme;
}

export default function MainContent({ 
  view, 
  currentSongId, 
  isPlaying, 
  onSongSelect,
  onPlayPause,
  theme
}: MainContentProps) {
  const themeClasses = {
    dark: {
      bg: 'from-purple-900 to-black',
      surface: 'bg-gray-900/50',
      hover: 'hover:bg-gray-800/50',
      text: 'text-white',
      secondary: 'text-gray-400',
      input: 'bg-gray-800',
    },
    light: {
      bg: 'from-purple-100 to-white',
      surface: 'bg-gray-100/50',
      hover: 'hover:bg-gray-100/50',
      text: 'text-gray-900',
      secondary: 'text-gray-600',
      input: 'bg-gray-100',
    },
  };

  const playlists: Playlist[] = [
    {
      id: '1',
      title: "Noche de Metal",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      description: "Los mejores temas de metal para tu noche",
      songs: []
    },
    {
      id: '2',
      title: "Rock Alternativo",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop",
      description: "Descubre nuevos sonidos alternativos",
      songs: []
    },
    {
      id: '3',
      title: "Punk Rock",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      description: "La mejor selección de punk rock",
      songs: []
    }
  ];

  const songs: Song[] = [
    { 
      id: '1', 
      title: "Miseria Nocturna", 
      artist: "Radio Miseria", 
      duration: "3:45",
      sourceUrl: "https://archive.org/details/miseria-nocturna"
    },
    { 
      id: '2', 
      title: "Oscuridad Total", 
      artist: "Radio Miseria", 
      duration: "4:20",
      sourceUrl: "https://archive.org/details/oscuridad-total"
    },
    { 
      id: '3', 
      title: "Noche Eterna", 
      artist: "Radio Miseria", 
      duration: "3:15",
      sourceUrl: "https://archive.org/details/noche-eterna"
    },
    { 
      id: '4', 
      title: "Sombras del Pasado", 
      artist: "Radio Miseria", 
      duration: "5:10",
      sourceUrl: "https://archive.org/details/sombras-pasado"
    },
    { 
      id: '5', 
      title: "Melodía Oscura", 
      artist: "Radio Miseria", 
      duration: "4:05",
      sourceUrl: "https://archive.org/details/melodia-oscura"
    }
  ];

  const renderContent = () => {
    switch (view) {
      case 'search':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Buscar</h1>
            <input
              type="text"
              placeholder="¿Qué quieres escuchar?"
              className={`w-full max-w-md px-4 py-2 rounded-full ${themeClasses[theme].input} ${themeClasses[theme].text} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
        );
      case 'library':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Tu Biblioteca</h1>
            <div className="grid grid-cols-2 gap-4">
              {playlists.map((playlist) => (
                <div key={playlist.id} className={`${themeClasses[theme].surface} p-4 rounded-lg ${themeClasses[theme].hover} transition cursor-pointer`}>
                  <img src={playlist.image} alt={playlist.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                  <h3 className="font-semibold">{playlist.title}</h3>
                  <p className={`text-sm ${themeClasses[theme].secondary}`}>{playlist.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-6">¡Bienvenido a Radio Miseria!</h1>
              <div className="grid grid-cols-3 gap-4">
                {playlists.map((playlist) => (
                  <div key={playlist.id} className={`${themeClasses[theme].surface} group p-4 rounded-lg ${themeClasses[theme].hover} transition cursor-pointer`}>
                    <div className="relative">
                      <img 
                        src={playlist.image} 
                        alt={playlist.title}
                        className="w-full aspect-square object-cover rounded-md mb-4"
                      />
                      <button 
                        className="absolute bottom-4 right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 hover:bg-purple-400"
                        onClick={onPlayPause}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-white" />
                        ) : (
                          <Play className="w-6 h-6 text-white ml-1" />
                        )}
                      </button>
                    </div>
                    <h3 className="font-semibold mb-1">{playlist.title}</h3>
                    <p className={`text-sm ${themeClasses[theme].secondary}`}>{playlist.description}</p>
                  </div>
                ))}
              </div>
            </header>

            <section>
              <h2 className="text-2xl font-bold mb-4">Canciones Populares</h2>
              <div className={`${themeClasses[theme].surface} rounded-lg`}>
                <div className={`grid grid-cols-[16px,4fr,3fr,1fr,1fr] gap-4 p-4 text-sm ${themeClasses[theme].secondary} border-b border-gray-800`}>
                  <div>#</div>
                  <div>TÍTULO</div>
                  <div>ARTISTA</div>
                  <div className="flex justify-end"><Clock className="w-4 h-4" /></div>
                  <div>FUENTE</div>
                </div>
                {songs.map((song, index) => (
                  <div 
                    key={song.id}
                    onClick={() => onSongSelect(song.id)}
                    className={`grid grid-cols-[16px,4fr,3fr,1fr,1fr] gap-4 p-4 text-sm transition cursor-pointer ${
                      currentSongId === song.id ? themeClasses[theme].surface : themeClasses[theme].hover
                    }`}
                  >
                    <div className={themeClasses[theme].secondary}>{index + 1}</div>
                    <div className="flex items-center gap-2">
                      {currentSongId === song.id && isPlaying && (
                        <span className="text-purple-500">▶</span>
                      )}
                      <span>{song.title}</span>
                    </div>
                    <div className={themeClasses[theme].secondary}>{song.artist}</div>
                    <div className={`${themeClasses[theme].secondary} text-right`}>{song.duration}</div>
                    <div className="flex justify-end">
                      <a 
                        href={song.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`${themeClasses[theme].secondary} hover:text-purple-500 transition`}
                      >
                        <Link className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`flex-1 bg-gradient-to-b ${themeClasses[theme].bg} overflow-y-auto p-8`}>
      {renderContent()}
    </div>
  );
}