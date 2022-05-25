import './App.css';
import {HashRouter, Routes, Route,} from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';

function App() {
  return (

    
    <HashRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
