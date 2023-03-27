import React, { useState } from 'react';
import audios from '../utils/audiosUtil';

function Game() {
  const [gameStart, setGameStart] = useState('paused');
  const [directions, setDirections] = useState(['x', 'y']);
  // const [fading, setFading] = useState(false);

  const getRandomClass = () => {
    const possibilities = [['x', 'a'], ['y', 'b']];
    return possibilities.map((element) => element[Math.floor(Math.random() * element.length)]);
  };

  const handleStartBtnClick = () => {
    setGameStart('');
    audios.randomQAudio().play();
    setDirections(getRandomClass);
    // setFading(true);
  };

  const handleTwitchClick = () => {
    setGameStart('paused');
    audios.stopAudio();
    audios.randomExitQAudio().play();
  };  

  return (
    <div style={ { width: '1024px', height: '768px', border: '1px solid black' } }>
      <button onClick={handleStartBtnClick} className="lg-btn"> Ache o Twitch!</button>
      <div>
        <div className={ directions[0] } style={{ animation: gameStart, width: '100px', marginLeft: '0px !important' }}>
          <img
            src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c5/Twitch_Dragonslayer_%28Base%29.png" 
            className={ gameStart === '' ? directions[1] : '' }
            style={{ animation: gameStart, width: '200px' }}
            onClick={handleTwitchClick}
          />
        </div>
      </div>
    </div>
    
  );
}

export default Game;