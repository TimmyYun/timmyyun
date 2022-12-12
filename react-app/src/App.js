import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      {/* <div className="container dark">
        <div className="app"> */}
          {/* <Header /> */}
          <Routes>
            <Route path="/" exact element={<ProfilePage />} />
            <Route path="/project" exact element={<ProjectsListPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
          </Routes>
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;
