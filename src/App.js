import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import PaymentsPage from './pages/PaymentsPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/list" element={<PaymentsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
