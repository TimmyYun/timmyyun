import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectPage from "./pages/ProjectPage";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProfilePage />} />
          <Route path="/project" exact element={<ProjectsListPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
