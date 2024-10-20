import logo from './logo.svg';
import './App.css';
import Home from './HomeAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import SubHome1 from './SubHome1';
import SubHome2 from './SubHome2';
import HomeAuth from './HomeAuth';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
       <BrowserRouter>
          <Routes>
            <Route path='/home' element={<HomeAuth/>}>
                <Route index element={<SubHome1 />} />
                <Route path='subhome2' element={<SubHome2 />} />
            </Route>
            <Route path='/about' element={<About />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
