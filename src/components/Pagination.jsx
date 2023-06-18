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
	const { page, itemLimit, totalRows } = pagination;
	const totalPages = Math.ceil(totalRows / itemLimit);

	function handlePageChange(newPage) {
		if (onPageChange) {
			onPageChange(newPage);
		}
	}

	return (
		<div className='flex'>
			<Button
				disabled={page <= 1}
				onClick={() => handlePageChange(page - 1)}
				color='grey'
				className='inline'
			>
				Prev
			</Button>
			<Button
				disabled={page >= totalPages}
				onClick={() => handlePageChange(page + 1)}
				color='grey'
				className='inline'
			>
				Next
			</Button>
		</div>
	);
}

export default Pagination;
