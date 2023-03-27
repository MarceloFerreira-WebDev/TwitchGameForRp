import Q1 from '../audios/Q1.ogg';
import Q2 from '../audios/Q2.ogg';
import Q3 from '../audios/Q3.ogg';
import Q4 from '../audios/Q4.ogg';
import exitQ1 from '../audios/exitQ1.ogg';
import exitQ2 from '../audios/exitQ2.ogg';
import exitQ3 from '../audios/exitQ3.ogg';
import exitQ4 from '../audios/exitQ4.ogg';

const qList = [new Audio(Q1), new Audio(Q2), new Audio(Q3), new Audio(Q4)];
const exitQList = [new Audio(exitQ1), new Audio(exitQ2), new Audio(exitQ3), new Audio(exitQ4)];

const randomQAudio = () => qList[Math.floor(Math.random() * qList.length)];

const randomExitQAudio = () => (exitQList[Math.floor(Math.random() * exitQList.length)]);

const stopAudio = () => {
  qList.forEach((audio) => audio.pause());
};

export default { randomQAudio, randomExitQAudio, stopAudio };