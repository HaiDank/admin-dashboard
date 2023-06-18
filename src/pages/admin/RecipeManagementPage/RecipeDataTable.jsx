import React, { useEffect, useState } from 'react';
import dummyRecipes from '../../../dummyRecipes';
import DataTableBase from '../../../components/DataTable/DataTableBase';
import { Button, Table } from 'flowbite-react';
import Pagination from '../../../components/Pagination';

const data = dummyRecipes;

const columns = ['Title', 'Tags', 'Rating', 'Action'];

// Convert each object in the array
const rows = data.map(({ imgUrl, title, tags, rating }) => ({
	imgUrl,
	title,
	tags,
	rating,
}));

function RecipeDataTable() {
	const [pagination, setPagination] = useState({
		page: 1,
		itemLimit: 6,
		totalRows: 12,
	});

	const [pageItems, setPageItems] = useState([]);

	function handlePageChange(newPage) {
		setPagination({
			...pagination,
			page: newPage,
		});
	}

	useEffect(() => {
		async function sliceArray() {
			try {
				let i = (pagination.page - 1) * pagination.itemLimit;
				const chunk = rows.slice(i, i + pagination.itemLimit);
				setPageItems(chunk);
			} catch (error) {
				console.log(error.message);
			}
		}
		sliceArray();
	}, [pagination]);

	return (
		<>
			<Table hoverable>
				<Table.Head>
					{columns.map((columnItem, i) => (
						<Table.HeadCell key={i}>{columnItem}</Table.HeadCell>
					))}
				</Table.Head>
				<Table.Body className='divide-y'>
					{pageItems.map((item, i) => (
						<Table.Row key={i}>
							<Table.Cell className='max-w-xs whitespace-nowrap content-center overflow-x-scroll no-scrollbar'>
								<img
									src={item.imgUrl}
									className='inline rounded-full aspect-square w-10 mr-4'
								/>
								<span>{item.title}</span>
							</Table.Cell>
							<Table.Cell className='max-w-xs flex flex-wrap'>
								{item.tags.map((tag, i) => {
									return (
										<>
											<span
												key={i}
												className='border rounded-full py-0.5 px-3 my-1 inline-block border-green-variant'
											>
												{tag}
											</span>
											{/* {(i + 1) % 3 == 0 ? <br /> : ' '} */}
										</>
									);
								})}
							</Table.Cell>
							<Table.Cell>{item.rating}</Table.Cell>
							<Table.Cell>
								{' '}
								<Button color='failure' size='sm'>
									Remove
								</Button>{' '}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			<Pagination onPageChange={handlePageChange} pagination={pagination} />
		</>
	);
}

export default RecipeDataTable;
