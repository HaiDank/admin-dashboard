import React from 'react';
import List from '../../../components/List/List';
import RecipeDataTable from './RecipeDataTable';
import AdminHeader from '../../../components/header/AdminHeader';

function RecipeMP() {
	return (
		<div className='m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-3xl overflow-x-scroll no-scrollbar'>
			<AdminHeader category='Page' title='Recipes' />
			<RecipeDataTable />
		</div>
	);
}

export default RecipeMP;
