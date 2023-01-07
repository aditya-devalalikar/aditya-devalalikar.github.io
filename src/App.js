import "./App.css";

function App() {
  return (
    <div>
      <nav className="bg-slate-100">
        <div>
          <h1 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Aditya Sudhir Devalalikar</h1>
        </div>
        <ul className="fontsize">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="content-flex bg-slate-200">
        <div class="flex flex-wrap justify-center">
          <img
            src="https://github.com/aditya-devalalikar/react.js-app/blob/main/src/assets/ad_img.png"
            className="p-1 bg-white border rounded max-w-sm"
            alt="..."
          />
        </div>
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
