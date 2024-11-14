import { useState } from 'react';

type Episode = {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
};

const episodes: Episode[] = [
  {
    id: 1,
    title: "Radio Miseria - En Vivo",
    date: "Ahora",
    duration: "En Vivo",
    description: "Transmisión en vivo de Radio Miseria"
  },
  {
    id: 2,
    title: "Programa Matutino",
    date: "Lunes a Viernes",
    duration: "2h",
    description: "El mejor programa para comenzar tu día"
  },
  {
    id: 3,
    title: "Tarde de Rock",
    date: "Lunes a Viernes",
    duration: "3h",
    description: "La mejor selección de rock en español"
  }
];

export default function MainContent() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Radio Miseria</h1>

      <div className="grid gap-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">En Vivo</h2>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-2">Transmisión en Vivo</h3>
            <p>Sintoniza ahora la mejor programación</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Programación</h2>
          <div className="grid gap-4">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                onClick={() => setSelectedEpisode(episode)}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{episode.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {episode.date}
                    </p>
                    <p className="mt-2">{episode.description}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {episode.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}