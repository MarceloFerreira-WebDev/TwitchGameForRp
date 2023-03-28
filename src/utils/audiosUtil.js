const Q1 = 'https://static.wikia.nocookie.net/leagueoflegends/images/2/20/Twitch_Original_Q_1.ogg';
const Q2 = 'https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Twitch_Original_Q_2.ogg';
const Q3 = 'https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Twitch_Original_Q_3.ogg';
const Q4 = 'https://static.wikia.nocookie.net/leagueoflegends/images/e/ec/Twitch_Original_Q_0.ogg';
const exitQ1 = 'https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Twitch_Original_QBuff_OnBuffActivate_0.ogg';
const exitQ2 = 'https://static.wikia.nocookie.net/leagueoflegends/images/b/b4/Twitch_Original_QBuff_OnBuffActivate_1.ogg';
const exitQ3 = 'https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Twitch_Original_QBuff_OnBuffActivate_3.ogg';
const exitQ4 = 'https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Twitch_Original_QBuff_OnBuffActivate_2.ogg';
const qList = [new Audio(Q1), new Audio(Q2), new Audio(Q3), new Audio(Q4)];
const exitQList = [new Audio(exitQ1), new Audio(exitQ2), new Audio(exitQ3), new Audio(exitQ4)];

const randomQAudio = () => qList[Math.floor(Math.random() * qList.length)];

const randomExitQAudio = () => (exitQList[Math.floor(Math.random() * exitQList.length)]);

const stopAudio = () => {
  qList.forEach((audio) => audio.pause());
};

export default { randomQAudio, randomExitQAudio, stopAudio };