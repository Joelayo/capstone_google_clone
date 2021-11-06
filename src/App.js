<<<<<<< HEAD
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
=======
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
>>>>>>> 8de156b69cfe72d45f02ce62c486f093da6f0347

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/search">
            {/* <SearchPage /> */}
          </Route>
          <Route path="/" element={<Home/>} />
=======
          <Route path="/search">{/* <SearchPage /> */}</Route>
>>>>>>> 8de156b69cfe72d45f02ce62c486f093da6f0347
        </Routes>
        <Home />
      </Router>
    </div>
  );
}

export default App;
