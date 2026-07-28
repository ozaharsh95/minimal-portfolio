import { useState, useEffect } from 'react';
import { ClockIcon } from './Icons';

export default function LocalTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bento-card time-card">
      <h3 className="card-title" style={{ justifyContent: 'center' }}>
        <ClockIcon /> Local Time
      </h3>
      <div className="time-clock">{currentTime || '12:00:00 PM'}</div>
      <div className="time-timezone">Ahmedabad, India (IST)</div>
      <div className="time-status">GMT+5:30 — Coding session active</div>
    </section>
  );
}
