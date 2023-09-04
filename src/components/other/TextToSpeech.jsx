import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ storyText }) {
  const [isReading, setIsReading] = useState(false);
  const { speak } = useSpeechSynthesis();

  const handleReadAloud = () => {
    speak({ text: storyText });
    setIsReading(true);
  };

  return (
    <div>
      <p>{storyText}</p>
      {!isReading && <button onClick={handleReadAloud}>Read Aloud</button>}
    </div>
  );
}
