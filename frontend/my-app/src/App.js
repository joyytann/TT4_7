import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Payment from './components/Payment';
import Loan from './components/CreateLoan';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          
          
        </Route>
        <Route exact path="/Loans" element={<Loan/>}>
          
          
        </Route>
        <Route exact path="/Payment" element={<Payment />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
