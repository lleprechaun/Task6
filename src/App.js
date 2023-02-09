import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";
import ResultPage from './pages/ResultPage';

function App() {

    /*----------------------------------HTML----------------------------------*/

  return (
      <div className={'app'}>
        <Router>
            <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route exact path="/login" element={ <LoginPage /> } />
                <Route exact path="/register" element={ <RegisterPage /> } />
                <Route exact path="/start" element={ <StartPage /> } />
                <Route exact path="/test" element={ <TestPage /> } />
                <Route exact path={'/result'} element={ <ResultPage/> } />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
