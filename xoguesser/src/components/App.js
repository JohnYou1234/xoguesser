import Display from './Display.js';
import Controls from './Controls.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Guess The Input
        </p>
      </header>
      <Display />
      <Controls />
    </div>
  );
}

export default App;
