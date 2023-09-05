import { useState } from 'react';
import propTypes from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ storyText }) {
  const [isReading, setIsReading] = useState(false);
  const { speak } = useSpeechSynthesis();

  TextToSpeech.propTypes = {
    storyText: propTypes.string.isRequired,
  };

  const handleReadAloud = () => {
    console.log('storyText:', storyText); // Check if storyText is correct
    speak({ text: storyText });
    setIsReading(true);
    console.log('i just clicked read more button');
  };

  return (
    <div>
      <p>{storyText}</p>
      {!isReading && <button onClick={handleReadAloud}>Read Aloud</button>}
    </div>
  );
}
