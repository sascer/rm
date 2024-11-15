export type View = 'home' | 'search' | 'library';
export type Theme = 'dark' | 'light';

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover?: string;
  sourceUrl: string;
}

export interface Playlist {
  id: string;
  title: string;
  image: string;
  description: string;
  songs: Song[];
}