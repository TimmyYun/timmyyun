import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/project" exact component={ProjectsListPage} />
          <Route path="/project/:id" component={ProjectPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
