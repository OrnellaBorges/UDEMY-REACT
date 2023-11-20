import Card from "./Card";

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card
        className="card"
        name="Anthony Blake"
        href="mailto:blake@example.com"
      >
        <p>
          {" "}
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>

        <a href="mailto:blake@example.com">Email Blake</a>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
