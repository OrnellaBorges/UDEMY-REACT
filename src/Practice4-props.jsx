import CourseGoal from "./Components/CourseGoal";

export default function Practice4() {
  return (
    <section id="app" data-testid="app">
      <h1>Practice 4 : Time to Practice === using Props</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}

        <CourseGoal
          title="Learn React"
          description="Description will be here"
        />

        <CourseGoal
          title="MY TITLE INSIDE PROPS"
          description="My description inside the attribute and share with destructurings props"
        />
      </ul>
    </section>
  );
}
