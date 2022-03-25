import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          
          
        </Route>
        <Route exact path="/Loans">
          
          
        </Route>
        <Route exact path="/Payment">
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
