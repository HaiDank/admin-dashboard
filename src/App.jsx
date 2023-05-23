import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import RecipeMP from "./pages/RecipeManagementPage/RecipeMP";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import UserMP from "./pages/UserManagementPage/UserMP";
import SideNav from "./components/NavBar/SideNav";
import TopNav from "./components/NavBar/TopNav";
import { usePageContext } from "./contexts/PageContext";

function App() {
  const { activeMenu } = usePageContext();

  console.log(activeMenu);

  return (
    <>
      <div className='relative flex'>
        <div
          className={
            activeMenu
              ? "sidebar dark:bg-secondary-dark-bg fixed h-screen w-72 bg-white "
              : "sidebar w-0 "
          }
        >
          <SideNav />
        </div>
        <div
          className={
            activeMenu
              ? "inline-block min-h-screen w-full md:ml-72"
              : "inline-block min-h-screen w-full"
          }
        >
          <div>
            <TopNav />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/RecipeManagement' element={<RecipeMP />} />
              <Route path='/Feedback' element={<FeedbackPage />} />
              <Route path='/UserManagement' element={<UserMP />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
