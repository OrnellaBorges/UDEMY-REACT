import "./courseGoal.css";

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}

        <CourseGoal title="Learn React" description="In-depth" />

        <CourseGoal
          title="hello"
          description="My description inside the attribute and share with destructurings props"
        />
      </ul>
    </div>
  );
}

export default App;
