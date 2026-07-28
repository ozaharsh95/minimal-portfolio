import { useState, useEffect, useRef } from "react";
import { SpotifyIcon } from "./Icons";

const TRACKS = [
  {
    id: "9476",
    title: "Apple Juice",
    artist: "Cloudchord x Grapetooth",
    url: "/audio/apple-juice.mp3",
  },
  {
    id: "8448",
    title: "Tôzen",
    artist: "Philanthrope",
    url: "/audio/tozen.mp3",
  },
  {
    id: "8878",
    title: "Swiss",
    artist: "SwuM",
    url: "/audio/swiss.mp3",
  },
];

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const audioRef = useRef(null);

  // Initialize audio and register stable event listeners
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5; // Comfortable default volume

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
      setIsPlaying(true);
    };

    const handlePauseEvent = () => {
      setIsPlaying(false);
    };

    const handleStalled = () => {
      setIsBuffering(true);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
    };

    const handleError = () => {
      console.log("Audio failed to load. Auto-skipping in 2s...");
      setIsBuffering(false);
      setIsPlaying(false);
      setTimeout(() => {
        setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
      }, 2000);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePauseEvent);
    audio.addEventListener("stalled", handleStalled);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePauseEvent);
      audio.removeEventListener("stalled", handleStalled);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Sync state (src, playing, paused) in a single unified effect
  useEffect(() => {
    if (!audioRef.current) return;

    const targetSrc = TRACKS[currentTrackIdx].url;
    if (audioRef.current.src !== targetSrc) {
      audioRef.current.src = targetSrc;
      setCurrentTime(0);
    }

    if (isPlaying) {
      setIsBuffering(true);
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsBuffering(false);
          })
          .catch((err) => {
            console.log("Playback failed: ", err);
            // Ignore AbortError when track is skipped quickly
            if (err.name !== "AbortError") {
              setIsPlaying(false);
              setIsBuffering(false);
            }
          });
      }
    } else {
      audioRef.current.pause();
      setIsBuffering(false);
    }
  }, [currentTrackIdx, isPlaying]);

  // Handle play/pause toggle click
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Next Track
  const handleNext = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
  };

  // Prev Track
  const handlePrev = () => {
    setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  // Scrubbing/Seeking
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Format time (e.g. 1:43)
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const activeTrack = TRACKS[currentTrackIdx];

  return (
    <section className="bento-card spotify-card">
      <div className="spotify-header">
        <div className="live-badge-wrapper">
          <span className="live-dot"></span>
          <span>FOCUS RADIO</span>
        </div>
        <span className="station-frequency">87.5 FM</span>
      </div>

      <div className="player-body">
        <div
          className={`vinyl-container ${isPlaying ? "playing" : ""}`}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div className="vinyl-disc"></div>
          <div className="vinyl-overlay">
            {isBuffering ? (
              <span
                className="btn-spinner"
                style={{ width: "18px", height: "18px", borderWidth: "2px" }}
              ></span>
            ) : isPlaying ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        <div className="player-details">
          <div className="player-track-name">{activeTrack.title}</div>
          <div className="player-artist">
            {isBuffering ? "Buffering..." : activeTrack.artist}
          </div>
          <div
            className={`spotify-visualizer ${isPlaying && !isBuffering ? "playing" : ""}`}
          >
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="player-progress-container">
        <span className="time-display">{formatTime(currentTime)}</span>
        <div className="progress-bar-wrapper">
          <input
            type="range"
            className="player-progress-bar"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
          />
        </div>
        <span className="time-display">{formatTime(duration)}</span>
      </div>

      {/* Playback Controls & Actions */}
      <div className="player-actions-row">
        <button
          className="control-btn"
          onClick={handlePrev}
          aria-label="Previous Track"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6L18 18V6z" />
          </svg>
        </button>
        <button
          className="control-btn"
          onClick={handleNext}
          aria-label="Next Track"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6z" />
          </svg>
        </button>
        <button
          className="playlist-toggle-btn-pill"
          onClick={() => setShowPlaylist(!showPlaylist)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <span>{showPlaylist ? "Hide" : "Tracks"}</span>
        </button>
      </div>

      {showPlaylist && (
        <div className="player-playlist">
          {TRACKS.map((track, idx) => (
            <div
              key={track.id}
              className={`playlist-item ${currentTrackIdx === idx ? "active" : ""}`}
              onClick={() => {
                setCurrentTrackIdx(idx);
                setIsPlaying(true);
              }}
            >
              <span className="playlist-item-num">{idx + 1}</span>
              <span className="playlist-item-title">{track.title}</span>
              <span className="playlist-item-artist">{track.artist}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
