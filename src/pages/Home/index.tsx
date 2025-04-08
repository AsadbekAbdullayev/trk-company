import React, { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from '@ui/index';

type User = {
	id: number;
	name: string;
	role: string;
};

const HomePage: React.FC = () => {
	const data = useMemo<User[]>(
		() => [
			{ id: 1, name: 'John Doe', role: 'Admin' },
			{ id: 2, name: 'Alice Smith', role: 'Editor' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
			{ id: 3, name: 'Bob Johnson', role: 'Viewer' },
		],
		[],
	);
	const columns = useMemo<ColumnDef<User>[]>(
		() => [
			{
				accessorKey: 'name',
				header: 'Name',
				width: 100,
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				accessorKey: 'role',
				header: 'Role',
			},
			{
				id: 'expander',
				header: 'expander',
				cell: ({ row }) => (
					<button
						className="text-blue-500 hover:underline"
						onClick={() => row.toggleExpanded()}
					>
						{row.getIsExpanded() ? 'Hide' : 'Show'}
					</button>
				),
			},
		],
		[],
	);
	return (
		<div className="w-full h-screen">
			{/* <Table columns={columns} data={data} /> */}
		</div>
	);
};

export default HomePage;
