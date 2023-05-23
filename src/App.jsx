import "./index.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import RecipeMP from "./pages/RecipeManagementPage/RecipeMP";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import UserMP from "./pages/UserManagementPage/UserMP";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <>
      <div className='flex '>
        <SideNav />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/RecipeManagement' element={<RecipeMP />} />
          <Route path='/Feedback' element={<FeedbackPage />} />
          <Route path='/UserManagement' element={<UserMP />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
