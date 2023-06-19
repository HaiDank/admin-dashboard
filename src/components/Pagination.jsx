import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'flowbite-react';

Pagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
	onPageChange: null,
};

function Pagination(props) {
	const { pagination, onPageChange } = props;
	const { page, size, totalRows } = pagination;
	const totalPages = Math.ceil(totalRows / size);

	function handlePageChange(newPage) {
		if (onPageChange) {
			onPageChange(newPage);
		}
	}

	return (
		<Button.Group className='text-gray-900 dark:text-gray-300'>
			<Button
				disabled={page <= 1}
				onClick={() => handlePageChange(page - 1)}
				color='gray'
			>
				Prev
			</Button>
			<Button
				disabled={page >= totalPages}
				onClick={() => handlePageChange(page + 1)}
				color='gray'
			>
				Next
			</Button>
		</Button.Group>
	);
}

export default Pagination;
