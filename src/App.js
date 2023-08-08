import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Assesment } from './components/assesment';
function App() {
  return (
    <div className="">
       <Router>
        <Routes>
          <Route path='/'  Component={Assesment} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
