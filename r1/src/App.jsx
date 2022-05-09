import './App.css';
import Briedis from './Components/001/Briedis';
import Kates from './Components/001/Kates';
import Meska from './Components/001/Meska';
import Vovere from './Components/001/Vovere';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>
        <Briedis></Briedis>
        <Meska></Meska>
        <Vovere></Vovere>
        <Kates></Kates>
      </header>
    </div>
  );
}

export default App;