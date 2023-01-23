import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/login" element={ <LoginPage /> } />
            <Route exact path="/register" element={ <RegisterPage /> } />
        </Routes>
      </Router>
  );
}

export default App;
