import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Noteslistpage from "./pages/Noteslistpage";
import Notepage from "./pages/Notepage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app ">
          <Header />
          <Routes>
            <Route path="" exact Component={Noteslistpage} />
            <Route path="note/:id" Component={Notepage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
