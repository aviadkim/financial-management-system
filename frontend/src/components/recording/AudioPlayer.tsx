import React, { useRef, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  audioUrl: string;
  onTimeUpdate?: (time: number) => void;
}

interface TimeUpdateEvent extends Event {
  target: HTMLAudioElement;
}

const CustomAudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, onTimeUpdate }) => {
  const playerRef = useRef<any>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#4299e1',
        progressColor: '#3182ce',
        cursorColor: '#2c5282',
        barWidth: 2,
        barRadius: 3,
        height: 60,
        normalize: true
      });

      ws.load(audioUrl);
      setWavesurfer(ws);

      return () => ws.destroy();
    }
  }, [audioUrl]);

  const handleTimeUpdate = (e: TimeUpdateEvent) => {
    onTimeUpdate?.(e.target.currentTime);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div ref={waveformRef} className="mb-4" />
      <ReactAudioPlayer
        ref={playerRef}
        src={audioUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        customControlsSection={[
          'MAIN_CONTROLS',
          'VOLUME_CONTROLS',
        ]}
        showSkipControls={false}
        showJumpControls={true}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default CustomAudioPlayer;
