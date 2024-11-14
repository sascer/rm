import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export type Episode = {
  id: number;
  title: string;
  type: string;
  duration: string;
  image: string;
  audioUrl: string;
};

type AudioContextType = {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  playEpisode: (episode: Episode) => void;
  togglePlay: () => void;
  setVolume: (value: number) => void;
  seekTo: (value: number) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value || 0);
    }
  };

  const playEpisode = (episode: Episode) => {
    if (currentEpisode?.id === episode.id) {
      togglePlay();
      return;
    }

    if (audioRef.current) {
      audioRef.current.src = episode.audioUrl;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setCurrentEpisode(episode);
      }).catch(console.error);

      audioRef.current.ontimeupdate = updateProgress;
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentEpisode) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const seekTo = (value: number) => {
    if (audioRef.current) {
      const time = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setProgress(value);
    }
  };

  return (
    <AudioContext.Provider 
      value={{
        currentEpisode,
        isPlaying,
        progress,
        volume,
        playEpisode,
        togglePlay,
        setVolume,
        seekTo,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};