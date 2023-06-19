import React, { useContext } from 'react';
import CustomLink from './CustomLink';
import { links } from './SideNavData';
import { useThemeContext } from '../../contexts/ThemeContext';

function SideNav() {
	const { setActiveMenu } = useThemeContext();

	const handleTurnOffMenu = () => setActiveMenu(false);

	return (
		<div className='ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto sidebar'>
			<div className='mb-10 z-40 flex justify-between items-center'>
				<img
					className='h-auto w-5/6'
					src='img/logo-text-recipehub-v2.png'
					about='recipeHub'
				/>
				<button
					type='button'
					onClick={() => handleTurnOffMenu()}
					className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
				>
					x
				</button>
			</div>
			<div className='z-50 '>
				{links.map((link) => (
					<CustomLink to={link.path} key={link.id}>
						{' '}
						{link.icon} <span>{link.title}</span>
					</CustomLink>
				))}
			</div>

			{/* <CustomLink to='/RecipeManagement'>Manage Recipe</CustomLink>
      <CustomLink to='/Feedback'>Feedback</CustomLink>
      <CustomLink to='/UserManagement'>Manage User</CustomLink> */}
		</div>
	);
}

export default SideNav;
