import { useState } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState(0);
  const [paragraph, setParagraph] = useState("");
  const para = ['a', 'b', 'c', 'd'];

  function generateParagraph(words) {
    const numWords = Number(words); // Convert words to a number
    if (!numWords || numWords <= 0) {
      alert("Enter a valid number greater than zero");
      return;
    }
    
    let sentence = '';
    for (let i = 0; i < numWords; i++) {
      const rand = Math.floor(Math.random() * para.length);
      sentence += para[rand] + " ";
    }
    setParagraph(sentence.trim());
  }

  return (
    <>
      <input
        placeholder='Enter number of words'
        type='number'
        value={words}
        onChange={(e) => setWords(e.target.value)}
      />
      <button onClick={() => generateParagraph(words)}>Generate</button>
      <div>{paragraph}</div>
    </>
  );
}

export default App;
