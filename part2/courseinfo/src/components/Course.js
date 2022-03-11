export const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

export const Content = ({ parts }) => (
  <>
    {parts.map((v) => (
      <Part key={v.id} part={v} />
    ))}
  </>
);

export const Sum = ({ exercises }) => (
  <strong>total of {exercises.reduce((p, n) => p + n, 0)} exercises</strong>
);

export const Course = ({ course }) => {
  const exercises = course.parts.map((v) => v.exercises);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Sum exercises={exercises} />
    </>
  );
};
