import React, { useState, useRef, useEffect } from "react";
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { musicData } from "../data";


const Card = ({songs}) => {
   
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [progress, setProgress] = useState({});
  const [duration, setDuration] = useState({});
  const [currentTime, setCurrentTime] = useState({});
  const [volume, setVolume] = useState({});
  const audioRefs = useRef({});
  const VOLUME_STEP = 0.05;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || !seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const playNextSong = (currentSongId) => {
    const currentIndex = musicData.findIndex((song) => song.id === currentSongId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % musicData.length;
    const nextSong = musicData[nextIndex];

    const currentAudio = audioRefs.current[currentSongId];
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const nextAudio = audioRefs.current[nextSong.id];
    if (!nextAudio) return;

    nextAudio.play().then(() => setCurrentPlaying(nextSong.id)).catch(console.error);
  };

  useEffect(() => {
    musicData.forEach((song) => {
      const audio = new Audio(song.audioSrc);
      audio.volume = 0.6;
      audioRefs.current[song.id] = audio;
      setVolume((prev) => ({ ...prev, [song.id]: 0.6 }));

      const setAudioData = () => setDuration((prev) => ({ ...prev, [song.id]: audio.duration }));
      const setAudioTime = () => {
        const cur = audio.currentTime;
        const dur = audio.duration || 1;
        setCurrentTime((prev) => ({ ...prev, [song.id]: cur }));
        setProgress((prev) => ({ ...prev, [song.id]: (cur / dur) * 100 }));
      };
      const handleEnded = () => playNextSong(song.id);

      audio.addEventListener("loadedmetadata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);
      audio.addEventListener("ended", handleEnded);

      audio._cleanup = () => {
        audio.removeEventListener("loadedmetadata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
        audio.removeEventListener("ended", handleEnded);
      };
    });

    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
        audio._cleanup?.();
      });
    };
  }, []);

  const togglePlay = (songId) => {
    const audio = audioRefs.current[songId];
    if (!audio) return;
    if (currentPlaying === songId) {
      audio.pause();
      setCurrentPlaying(null);
    } else {
      Object.keys(audioRefs.current).forEach((id) => {
        if (parseInt(id) !== songId) audioRefs.current[id].pause();
      });
      audio.play().then(() => setCurrentPlaying(songId)).catch(console.error);
    }
  };

  const handleProgressClick = (e, songId) => {
    const audio = audioRefs.current[songId];
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  };

  const skipForward = (songId) => {
    const audio = audioRefs.current[songId];
    if (audio) audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
  };
  const skipBackward = (songId) => {
    const audio = audioRefs.current[songId];
    if (audio) audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const volumeUp = (songId) => {
    const audio = audioRefs.current[songId];
    if (!audio) return;
    const newVol = Math.min((volume[songId] ?? 0.6) + VOLUME_STEP, 1);
    audio.volume = newVol;
    setVolume((prev) => ({ ...prev, [songId]: newVol }));
  };
  const volumeDown = (songId) => {
    const audio = audioRefs.current[songId];
    if (!audio) return;
    const newVol = Math.max((volume[songId] ?? 0.6) - VOLUME_STEP, 0);
    audio.volume = newVol;
    setVolume((prev) => ({ ...prev, [songId]: newVol }));
  };

 


  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-900 selection:bg-violet-500/30 p-4 flex flex-col items-center">
      <div className="p-8 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">🎵 Enjoy Your Music</h2>
        <p className="text-gray-500 text-2xl">បទចម្រៀងដែលអ្នកចូលចិត្ត</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {musicData.map((song) => (
          <div key={song.id} className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20">
            <div className="px-6 pt-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img src={song.artistImage} alt={song.title} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{song.title}</h3>
              <p className="text-purple-300">{song.artist}</p>
             
            </div>

            <div className="px-6 pb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <button onClick={() => skipBackward(song.id)} className="text-white hover:text-purple-300">
                  <BiSkipPrevious size={24} />
                </button>

                <button onClick={() => togglePlay(song.id)} className="bg-white text-purple-900 rounded-full p-3 hover:scale-105 transition-transform">
                  {currentPlaying === song.id ? <AiFillPauseCircle size={32} /> : <AiFillPlayCircle size={32} />}
                </button>

                <button onClick={() => skipForward(song.id)} className="text-white hover:text-purple-300">
                  <BiSkipNext size={24} />
                </button>
              </div>

              <div className="w-full bg-white/20 rounded-full h-1.5 cursor-pointer relative" onClick={(e) => handleProgressClick(e, song.id)}>
                <div className="bg-white h-full rounded-full transition-all duration-100" style={{ width: `${progress[song.id] || 0}%` }} />
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{formatTime(currentTime[song.id])}</span>
                <span>{formatTime(duration[song.id])}</span>
              </div>

              <div className="flex items-center justify-center gap-4 mt-3">
                <button onClick={() => volumeDown(song.id)} className="text-white bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <FaVolumeDown size={18} />
                </button>

                <span className="text-xs text-white">{Math.round((volume[song.id] ?? 0.6) * 100)}%</span>

                <button onClick={() => volumeUp(song.id)} className="text-white bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <FaVolumeUp size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
