import State from "../components/State.jsx";

const App = () => {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-center">
            <h1 className="display text-primary">Hooks React-JS</h1>
            <hr/>
            <State/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;