import React, { useState, useRef, useEffect } from "react";
import {
  IoChevronBack,
  IoPlay,
  IoPause,
  IoHeart,
  IoMusicalNotes,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoSearch,
  IoEllipsisHorizontal
} from "react-icons/io5";

/* ================= MOCK DATA ================= */

import { artistsData } from "../artistsData";
/* ================= APP ================= */

export default function App() {
  const [view, setView] = useState("home");
  const [artist, setArtist] = useState(null);
  const [expandedAlbum, setExpandedAlbum] = useState(null);
  const [song, setSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  /* ================= AUDIO EVENTS ================= */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song) return;

    const timeUpdate = () => setCurrentTime(audio.currentTime);
    const metaLoaded = () => setDuration(audio.duration);
    const ended = () => playNext();

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("loadedmetadata", metaLoaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("loadedmetadata", metaLoaded);
      audio.removeEventListener("ended", ended);
    };
  }, [song]);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [song]);

  /* ================= HELPERS ================= */

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  /* ================= HANDLERS ================= */

  const openArtist = (a) => {
    setArtist(a);
    setView("artist");
    setExpandedAlbum(null);
    setIsFollowing(false);
  };

  const toggleAlbum = (albumId) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };

  const playSong = (s, index, allSongs) => {
    setSong(s);
    setPlaylist(allSongs);
    setCurrentIndex(index);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  const playNext = () => {
    if (playlist.length === 0) return;
    const next = (currentIndex + 1) % playlist.length;
    playSong(playlist[next], next, playlist);
  };

  const playPrevious = () => {
    if (playlist.length === 0) return;
    const prev = (currentIndex - 1 + playlist.length) % playlist.length;
    playSong(playlist[prev], prev, playlist);
  };

  const seek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  /* ================= HOME VIEW ================= */

  if (view === "home") {
    return (
      <div className="min-h-screen   bg-gray-700  p-8 pb-32 mt-10">
        {/* Header */}
        

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {artistsData.map((a) => (
            <div
              key={a.id}
              onClick={() => openArtist(a)}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl cursor-pointer hover:scale-105 hover:bg-white/15 transition-all duration-300 shadow-xl border border-white/20"
            >
              <img 
                src={a.image} 
                className="w-full aspect-square rounded-xl mb-4 object-cover shadow-lg" 
                alt={a.name}
              />
              <h2 className="text-white font-bold text-xl mb-1">{a.name}</h2>              
            </div>
          ))}
        </div>

        {song && <MiniPlayer />}
        <audio ref={audioRef} src={song?.audio} />
      </div>
    );
  }

  /* ================= ARTIST VIEW ================= */

  const allSongs = artist.albums.flatMap(al => al.songs);

  return (
    <div className="min-h-screen bg-gray-800 pb-32">
      {/* Header with Back Button */}
      <div className="bg-gray-600 selection:bg-violet-500/30px-6 pt-8 pb-8">
        {/* Artist Profile with Back Button */}
        <div className="flex items-center justify-between mb-6 mt-15">
          {/* Back Button - Left Side */}
          <button 
            onClick={() => setView("home")} 
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition text-gray-700 hover:text-gray-900"
          >
            <IoChevronBack size={24} />
          </button>

          {/* Artist Image - Center */}
          <img 
            src={artist.image} 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            alt={artist.name}
          />

          {/* Menu Button - Right Side */}
          <div className="w-10 h-10" />    
        </div>

        {/* Artist Info */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{artist.name}</h1>
          <p className="text-gray-600 text-sm mb-4">{artist.listens}</p>
          
          <div className="flex gap-4">
          
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                isFollowing 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
     

      {/* Albums List */}
      <div className="px-6">
        {artist.albums.map((album) => (
          <div key={album.id} className="mb-6 ">
            {/* Album Header - Clickable */}
            <div 
              onClick={() => toggleAlbum(album.id)}
              className="flex items-center justify-between py-4 cursor-pointer bg-gray-200 hover:bg-gray-50 rounded-lg px-3 transition"
            >
              <h2 className="text-lg font-bold text-gray-900">{album.title}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{album.songs.length} songs</span>
                <div className={`transform transition-transform duration-300 ${expandedAlbum === album.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Songs List - Expandable */}
            {expandedAlbum === album.id && (
              <div className="space-y-3 mt-2 animate-in fade-in slide-in-from-top-2 duration-300 bg-gray-300 rounded-2xl">
                {album.songs.map((s, idx) => {
                  const allSongsIndex = allSongs.findIndex(song => song.id === s.id);
                  const isPlaying = song?.id === s.id && playing;
                  
                  return (
                    <div
                      key={s.id}
                      onClick={() => playSong(s, allSongsIndex, allSongs)}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition"
                    >
                      {/* Album Art */}
                      <div className="relative flex-shrink-0">
                        <img 
                          src={s.image} 
                          className="w-14 h-14 rounded-lg object-cover"
                          alt={s.title}
                        />
                        {isPlaying && (
                          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                          </div>
                        )}
                      </div>

                      {/* Song Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 font-semibold truncate">{s.title}</h3>
                     
                      </div>

                      {/* Duration */}
                      <span className="text-gray-400 text-sm flex-shrink-0">{s.duration}</span>

                      {/* More Options */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        <IoEllipsisHorizontal size={20} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {song && <MiniPlayer />}
      <audio ref={audioRef} src={song?.audio} />
    </div>
  );

  /* ================= MINI PLAYER ================= */

  function MiniPlayer() {
    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
        {/* Progress Bar */}
        <div className="relative h-1 bg-gray-200">
          <div 
            className="absolute top-0 left-0 h-full bg-purple-600 transition-all"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={seek}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img 
              src={song.image} 
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-md"
              alt={song.title}
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-gray-900 truncate">{song.title}</p>
              <p className="text-gray-500 text-sm truncate">{song.album}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 ml-4">
            <button 
              onClick={playPrevious}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              <IoPlaySkipBack size={24} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
            >
              {playing ? <IoPause size={24} /> : <IoPlay size={24} className="ml-1" />}
            </button>
            
            <button 
              onClick={playNext}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              <IoPlaySkipForward size={24} />
            </button>
          </div>

          <div className="text-xs text-gray-500 ml-6 flex-shrink-0 min-w-[80px] text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    );
  }
}