
import { Modal } from 'flowbite-react';
import React, { useState } from 'react';

const AdminRecipeDetailModal = ({chosenRecipe, setChosenRecipe }) => {
	const [completedSteps, setCompletedSteps] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const style = {
		heading: 'text-2xl font-bold underline underline-offset-4 pb-4',
	};

	
	return (
		<Modal
			dismissible
			show={chosenRecipe}
			onClose={() => setChosenRecipe(null)}
			size='7xl'
		>
			<Modal.Body>
				<section className='h-[85vh] z-30'>
					
				</section>
			</Modal.Body>
		</Modal>
	);
};

export default AdminRecipeDetailModal;
