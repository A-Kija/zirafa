import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Back from './Components/back/Back';
import Front from './Components/front/Front';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Back/>}></Route>
        <Route path="/" index element={<Front/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
