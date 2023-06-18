import React from 'react';
import UserDataTable from './UserDataTable';
import AdminHeader from '../../../components/header/AdminHeader';

function UserMP() {
	return (
		<div className='m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-3xl overflow-x-scroll no-scrollbar'>
      <AdminHeader category='page' title='Users'/>
			<UserDataTable />
		</div>
	);
}

export default UserMP;
