import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ value }) => {
  return <p>has {value} votes</p>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    [anecdotes[0]]: 0,
    [anecdotes[1]]: 0,
    [anecdotes[2]]: 0,
    [anecdotes[3]]: 0,
    [anecdotes[4]]: 0,
    [anecdotes[5]]: 0,
    [anecdotes[6]]: 0,
  });

  const getMostVotes = () => {
    const a = Array.from(Object.values(votes));
    let indexOfMaxValue = a.reduce(
      (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
      0
    );
    return indexOfMaxValue;
  };

  const getRandomIdx = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0)) + 0);
  };

  const vote = () => {
    let curr = votes[anecdotes[selected]];
    setVotes({ ...votes, [anecdotes[selected]]: curr + 1 });
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Display value={votes[anecdotes[selected]]} />
      <Button onClick={vote} text="vote" />
      <Button onClick={getRandomIdx} text="next" />
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[getMostVotes()]} has {getMostVotes()} votes
      </p>
    </>
  );
};

export default App;
