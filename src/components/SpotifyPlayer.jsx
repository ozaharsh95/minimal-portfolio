import { SpotifyIcon } from './Icons';

export default function SpotifyPlayer() {
  return (
    <section className="bento-card spotify-card">
      <div className="spotify-header">
        <span className="spotify-icon"><SpotifyIcon /></span>
        <span className="spotify-badge">Offline Playlist</span>
      </div>
      <div className="spotify-body">
        <div className="spotify-album-art">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <div className="spotify-track-info">
          <div className="spotify-track-name">Chill Lofi Coding Beats</div>
          <div className="spotify-artist">Ambient Focus Loop</div>
          <div className="spotify-visualizer">
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
            <span className="visualizer-bar"></span>
          </div>
        </div>
      </div>
      <div className="time-status" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
        Simulating live streaming...
      </div>
    </section>
  );
}
