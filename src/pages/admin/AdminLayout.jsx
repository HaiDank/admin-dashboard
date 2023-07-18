import React from 'react';
import SideNav from '../../components/NavBar/SideNav';
import TopNav from '../../components/NavBar/TopNav';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';
import RecipeMP from './RecipeManagementPage/RecipeMP.jsx';
import FeedbackPage from './FeedbackPage/FeedbackPage.jsx';
import UserMP from './UserManagementPage/UserMP.jsx';
function AdminLayout() {
	const { activeMenu, isDarkMode } = useThemeContext();
	return (
		<main
			className={
				isDarkMode
					? 'dark relative flex bg-gray-800 overflow-hidden text-whitegray'
					: 'relative flex overflow-hidden'
			}
		>
			<div
				className={
					activeMenu
						? 'sidebar fixed h-screen w-72 bg-white dark:bg-gray-900'
						: 'sidebar w-0 '
				}
			>
				<SideNav />
			</div>
			<div
				className={
					activeMenu
						? ' min-h-screen w-full dark:bg-gray-800 md:ml-72'
						: 'min-h-screen w-full dark:bg-gray-800'
				}
			>
				<div className='static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
					<TopNav />
				</div>
				<div>
					<Routes>
						
							<Route path='/' element={<DashBoard />}/>
								<Route path='/recipeManagement' element={<RecipeMP />} />
								<Route path='/feedback' element={<FeedbackPage />} />
								<Route path='/userManagement' element={<UserMP />} />
							
						
					</Routes>
				</div>
			</div>
		</main>
	);
}

export default AdminLayout;
