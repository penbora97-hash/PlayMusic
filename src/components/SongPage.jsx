import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IoChevronBack,
  IoPlay,
  IoPause,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoHeart,
  IoHeartOutline,
  IoShareSocial,
  IoEllipsisHorizontal,
} from "react-icons/io5";

export default function SongPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get song data from navigation state
  const { song } = location.state || {};

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const audioRef = useRef(null);

  // Redirect if no song data
  useEffect(() => {
    if (!song) {
      navigate("/");
    }
  }, [song, navigate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // Return null if no song
  if (!song) return null;
  // Skip backward 10 seconds
  const handleSkipBack = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      0,
      audioRef.current.currentTime - 10,
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  // Skip forward 10 seconds
  const handleSkipForward = () => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = Math.min(
      duration,
      audioRef.current.currentTime + 10,
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="min-h-screen bg-gray-900 selection:bg-violet-500/30  text-white">
      {/* Back Button - Top Left Corner */}
      <button
        className="fixed top-30 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg border border-white/20"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack size={24} />
      </button>

      {/* Menu Button - Top Right Corner */}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Album Art Section */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-bl from-red-800 to-blue-700 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src={song.image}
                alt={song.title}
                className="relative w-full max-w-md aspect-square object-cover rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Music";
                }}
              />

              {/* Play Overlay on Hover */}
            </div>
          </div>

          {/* Song Info & Controls */}
          <div className="space-y-5">
            {/* Song Details */}
            <div className="space-y-2">
              <h1 className="text-5xl font-bold h-15 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                {song.title}
              </h1> 
              <p className="text-2xl text-gray-300 font-medium">
                {song.artist}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400 pt-2 flex-wrap"></div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 pt-4">
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden group cursor-pointer">
                <div
                  className="absolute top-0 left-0 h-full bg-red-700 transition-all"
                  style={{ width: `${progress}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-6">
                <button
                  onClick={handleSkipBack}
                  className="text-white/70 hover:text-white transition transform hover:scale-110"
                >
                  <IoPlaySkipBack size={32} />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-gradient-to-br bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  {playing ? (
                    <IoPause size={32} />
                  ) : (
                    <IoPlay size={32} className="ml-1 text-black" />
                  )}
                </button>

                <button
                  onClick={handleSkipForward}
                  className="text-white/70 hover:text-white transition transform hover:scale-110"
                >
                  <IoPlaySkipForward size={32} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`transition transform hover:scale-110 ${liked ? "text-red-500" : "text-white/70 hover:text-white"}`}
                >
                  {liked ? <IoHeart size={28} /> : <IoHeartOutline size={28} />}
                </button>

                <button className="text-white/70 hover:text-white transition transform hover:scale-110">
                  <IoShareSocial size={28} />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-6 space-y-3 border-t border-white/10">
              <div className="flex justify-between text-sm mt-4">
                <span className="text-gray-400">Artist</span>
                <span className="text-white font-medium">{song.artist}</span>
              </div>
              <div className="flex justify-between text-sm  mt-4">
                <span className="text-gray-400">Duration</span>
                <span className="text-white font-medium">
                  {song.duration || formatTime(duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={song.audio} />
    </div>
  );
}
