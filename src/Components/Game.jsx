import React, { useEffect, useState } from 'react';
import sound1 from '../audios/Twitch_Original_Q_1.ogg';

function Game() {
  const [gameStart, setGameStart] = useState('paused');
  const [directions, setDirections] = useState(['x', 'y']);
  const audio = new Audio(sound1);

  const handleClick = () => {
    setGameStart('');
    audio.play();
  };

  const getRandomClass = () => {
    const possibilities = [['x', 'a'], ['y', 'b']];
    return possibilities.map((element) => element[Math.floor(Math.random() * element.length)]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirections(getRandomClass);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={ { width: '1024px', height: '768px', border: '1px solid black' } }>
      <button onClick={handleClick} className="lg-btn"> Ache o Twitch!</button>
      <div className={ directions[0] } style={{ animation: gameStart }}>
        <img
          src="https://www.freepnglogos.com/uploads/box-png/box-png-transparent-google-objects-pinterest-9.png" 
          className={ directions[1] }
          style={{ animation: gameStart, width: '100px' }}
          onClick={ () => { console.log('dale'); } }
        />
      </div>
    </div>
    
  );
}

export default Game;