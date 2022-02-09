
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tools from './components/Tools/Tools';
function App() {
  return (
    <BrowserRouter>
      <Toolbar/>
      <Routes>
        <Route path="/outils/*"  element={<Tools/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
