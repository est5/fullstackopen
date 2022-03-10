import { useState } from 'react';

const DisplayHeader = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const DisplayStat = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ stats }) => {
  const calculateAll = () => {
    return stats.good + stats.neutral + stats.bad;
  };

  const calculateAvg = () => {
    return (stats.good - stats.bad) / calculateAll();
  };

  const calculatePos = () => {
    return (stats.good / calculateAll()) * 100 + ' %';
  };

  if (stats.good === 0 && stats.bad === 0 && stats.neutral === 0) {
    return <>No feedback given</>;
  }

  return (
    <>
      <DisplayStat text={'good'} value={stats.good} />
      <DisplayStat text={'neutral'} value={stats.neutral} />
      <DisplayStat text={'bad'} value={stats.bad} />
      <DisplayStat text="all" value={calculateAll()} />
      <DisplayStat text="average" value={calculateAvg()} />
      <DisplayStat text="positive" value={calculatePos()} />
    </>
  );
};

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
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
