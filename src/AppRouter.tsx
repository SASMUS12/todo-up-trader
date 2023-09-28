import React from 'react';
import './AppRouter.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TaskPage from "./page/TaskPage/TaskPage";
import SelectionPage from "./page/SelectionPage/SelectionPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
