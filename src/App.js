import "./App.css";

function App() {
  return (
    <div>
      <nav className="bg-slate-100">
        <div>
          <h1>Aditya Sudhir Devalalikar</h1>
        </div>
        <ul className="fontsize">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="content-flex bg-slate-200">
        <h1> Home </h1>
      </div>
      <div className="content-flex bg-slate-300">
        <h1> About </h1>
      </div>
      <div className="content-flex bg-slate-400">
        <h1> Skills </h1>
      </div>
      <div className="content-flex bg-slate-500">
        <h1> Contact </h1>
      </div>
    </div>
  );
}

export default App;
