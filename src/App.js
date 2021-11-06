import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search">
            {/* <SearchPage /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;