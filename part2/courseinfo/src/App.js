const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((v) => (
      <Part key={v.id} part={v} />
    ))}
  </>
);

const Sum = ({ exercises }) => (
  <strong>total of {exercises.reduce((p, n) => p + n, 0)} exercises</strong>
);

const Course = ({ course }) => {
  const exercises = course.parts.map((v) => v.exercises);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Sum exercises={exercises} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
