import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'flowbite-react';
import Pagination from '../../../components/DataTable/Pagination';

import PageSizeSelector from '../../../components/DataTable/PageSizeSelector';
import SearchBar from '../../../components/DataTable/SearchBar';
import ConfirmModal from '../../../components/ConfirmModal';
import AdminRecipeDetail from '../../../components/DataTable/AdminRecipeDetail';
import AdminRecipeDetailModal from '../../../components/DataTable/AdminRecipeDetail';
import dummyRecipes from '../../../dummyRecipes';

const columns = [
	{
		key: 'title',
		name: 'Title',
	},
	{
		key: '',
		name: 'Tags',
	},
	{
		key: 'rating',
		name: 'Rating',
	},
];

function RecipeDataTable() {
	const [rows, setRows] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedRow, setSelectedRow] = useState(null);

	const [pagination, setPagination] = useState({
		page: 1,
		size: 10,
		totalItem: 4,
	});

	const [filter, setFilter] = useState({
		page: 1,
		size: 10,
		sort: 'recipe_id',
		direction: 'asc',
		query: '',
	});


	function handleClick(argument, item) {
		if (argument === 'openConfirm') {
			setOpenModal(true);
			setSelectedRow(item);
		} else {
			if (argument === 'yes') {
				if (selectedRow) {
					// var id = item.recipe_id;
					// setRows((current) => current.filter((row) => row.recipe_id !== id))
					// privateAxios.delete(`/api/v1/admin/recipe/${id}`);
					// setSelectedRow(null);
				}
				setOpenModal(false);
			} else {
				setOpenModal(false);
				setSelectedRow(null);
			}
		}
	}

	function handlePageChange(newPage) {
		setFilter({
			...filter,
			page: newPage,
		});
	}

	function handleSelectPageSize(event) {
		setFilter({
			...filter,
			size: event.target.value,
		});
	}

	function handleTableSearch(value) {
		setFilter({
			...filter,
			query: value,
		});
	}

	function handleTableSort(key) {
		if (key == filter.sort) {
			let newDirection;
			if (filter.direction == 'asc') {
				newDirection = 'desc';
			} else {
				newDirection = 'asc';
			}
			setFilter({
				...filter,
				page: 1,
				direction: newDirection,
			});
		} else {
			setFilter({
				...filter,
				page: 1,
				sort: key,
				direction: 'asc',
			});
		}
	}

	useEffect(() => {
		async function fetchRecipes() {
			setIsLoading(true);
			const resp = dummyRecipes
			setIsLoading(false);
			setRows(resp);
			setPagination({
				page: filter.page,
				size: filter.size,
				totalItem: 3,
			});
		}
		fetchRecipes();
	}, [filter]);

	return (
		<>
			<div className='flex justify-between max-h-12	'>
				<PageSizeSelector onPageSizeSelect={handleSelectPageSize} />
				<SearchBar onSearch={handleTableSearch} />
			</div>
			<Table hoverable>
				<Table.Head>
					{columns.map((column, i) => (
						<Table.HeadCell
							key={i}
							onClick={() => handleTableSort(column.key)}
							className='cursor-pointer'
						>
							{column.name}{' '}
							<span>
								{column.key == filter.sort
									? filter.direction == 'asc'
										? '\u25B2'
										: '\u25BC'
									: '\u25BC'}
							</span>
						</Table.HeadCell>
					))}

					<Table.HeadCell>Action</Table.HeadCell>
				</Table.Head>
				{isLoading && <Spinner size='xl' className='flex content-center' />}
				<Table.Body className='divide-y'>
					{!isLoading &&
						rows.map((item, i) => (
							<Table.Row
								key={i}
								className='dark:border-gray-700 dark:bg-gray-800'
								onClick={() => setSelectedRow(item)}
							>
								{/* <Table.Cell className='!p-4'>
									<Checkbox checked={allSelected} />
								</Table.Cell> */}
								<Table.Cell className='max-w-xs whitespace-nowrap content-center overflow-x-scroll no-scrollbar'>
									<img
										src={
											item.images.length > 0
												? item.images[0].imageUrl
												: ''
										}
										className='inline rounded-full aspect-square w-10 mr-4'
									/>
									<span>{item.title}</span>
								</Table.Cell>
								<Table.Cell className='max-w-xs flex flex-wrap'>
									{item.tags.map((tag) => {
										return (
											<span
												key={tag.tagId}
												className='border rounded-full py-0.5 px-3 my-1 inline-block border-green-variant'
											>
												{tag.tagName}
											</span>
										);
									})}
								</Table.Cell>
								<Table.Cell>{item.rating}</Table.Cell>
								<Table.Cell>
									{' '}
									<Button
										color='failure'
										size='sm'
										outline
										onClick={() => handleClick('openConfirm', item)}
									>
										Remove
									</Button>{' '}
								</Table.Cell>
							</Table.Row>
						))}
				</Table.Body>
			</Table>

			<Pagination onPageChange={handlePageChange} pagination={pagination} />

			<AdminRecipeDetailModal  chosenRecipe={selectedRow} setChosenRecipe={setSelectedRow}/>

			<ConfirmModal
				content='Are you sure you want to delete this item?'
				isOpened={openModal}
				handleClick={handleClick}
			/>
		</>
	);
}

export default RecipeDataTable;
