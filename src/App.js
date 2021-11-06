import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search">{/* <SearchPage /> */}</Route>
        </Routes>
        <Home />
      </Router>
    </div>
  );
}

export default App;
