import './App.css';
import FlashList from './FlashList';

const dataFlash = [
  {front: "This", back: "That"},
  {front: "Onmyo", back: "Magic"},
  {front: "Ninja", back: "Dex"},
  {front: "Odachi", back: "Str"},
  {front: "Tonfa", back: "Courage"},
  {front: "Magic", back: "Switch"},
  {front: "Back", back: "Front"},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlashList list={dataFlash}/>
      </header>
    </div>
  );
}

export default App;
