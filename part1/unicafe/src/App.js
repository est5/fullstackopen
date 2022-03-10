import { useState } from 'react';

const DisplayHeader = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const DisplayPara = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementStat = (stat) => {
    return () => setStats({ ...stats, [stat]: stats[stat] + 1 });
  };

  return (
    <div>
      <DisplayHeader text="give feedback" />
      <Button onClick={incrementStat('good')} text="good" />
      <Button onClick={incrementStat('neutral')} text="neutral" />
      <Button onClick={incrementStat('bad')} text="bad" />
      <DisplayHeader text="statistics" />
      <DisplayPara text={'good'} value={stats.good} />
      <DisplayPara text={'neutral'} value={stats.neutral} />
      <DisplayPara text={'bad'} value={stats.bad} />
    </div>
  );
};

export default App;
