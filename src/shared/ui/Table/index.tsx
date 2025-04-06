import React from 'react';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	useReactTable,
	RowData,
} from '@tanstack/react-table';

export const TABLE_ACTIONS = {
	edit: 'edit',
	delete: 'delete',
};

export const TABLE_STYLE = {
	border: '1px solid #F0F2F3',
	activeBorder: '2px solid #2081FA',
	text: '#000',
	disabledText: 'gray',
	placeholder: '#909',
	cellHover: '#e4f2f7',
	cellSpacing: '12px',
	fontSize: '12px',
	hover: '#2081FA',
	font: 'tahoma',
};

type AdminTableProps<T extends RowData> = {
	columns: ColumnDef<T>[];
	data: T[];
};

export default function AdminTable<T extends RowData>({
	columns,
	data,
}: AdminTableProps<T>) {
	const [columnOrder, setColumnOrder] = React.useState<string[]>([]);
	const [columnPinning, setColumnPinning] = React.useState({});
	const [columnSizing, setColumnSizing] = React.useState({});
	const [expanded, setExpanded] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		state: {
			columnOrder,
			columnPinning,
			columnSizing,
			expanded,
		},
		onColumnOrderChange: setColumnOrder,
		onColumnPinningChange: setColumnPinning,
		onColumnSizingChange: setColumnSizing,
		onExpandedChange: setExpanded,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		columnResizeMode: 'onChange',
		debugTable: false,
	});

	return (
		<div className="overflow-auto">
			<table
				className="w-full border-collapse"
				style={{
					border: TABLE_STYLE.border,
					fontSize: TABLE_STYLE.fontSize,
					fontFamily: TABLE_STYLE.font,
				}}
			>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									colSpan={header.colSpan}
									className="text-left font-medium px-4 py-2 text-[#212529] text-[16px] "
									style={{
										borderBottom: TABLE_STYLE.border,
										background: 'var(--Light-black, #f8f9fa)',
										height: '43px',
										width: header.getSize(),
										border: '1px solid #E9ECEF',
									}}
									{...{
										onDoubleClick: header.column.getToggleSortingHandler?.(),
										...header.getResizeHandler?.(),
									}}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
									{header.column.getCanResize() && (
										<div
											{...header.getResizeHandler?.()}
											onClick={(e) => e.stopPropagation()}
											className={`resizer ${
												header.column.getIsResizing() ? 'isResizing' : ''
											}`}
											style={{
												display: 'inline-block',
												width: '5px',
												height: '100%',
												cursor: 'col-resize',
												position: 'absolute',
												right: 0,
												top: 0,
												background: header.column.getIsResizing()
													? TABLE_STYLE.activeBorder
													: 'transparent',
											}}
										/>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					<tr
						className="bg-[#A8C1FF] text-[#000] font-semibold !border !border-1 !border-white"
						style={{ border: '1px solid red' }}
					>
						<td className="px-4 py-2 border-b text-gray-800 !border !border-1 !border-white">
							wew
						</td>
						<td
							className="px-4 py-2 border-b text-gray-800 !border !border-1 !border-white"
							style={{
								fontSize: TABLE_STYLE.fontSize,
							}}
						>
							wew
						</td>
						<td
							className="px-4 py-2 border-b text-gray-800 !border !border-1 !border-white"
							style={{
								fontSize: TABLE_STYLE.fontSize,
							}}
						>
							wew
						</td>
					</tr>
					{table.getRowModel().rows.map((row) => (
						<React.Fragment key={row.id}>
							<tr>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className="px-4 py-2 border-b text-gray-800 border"
										style={{
											fontSize: TABLE_STYLE.fontSize,
										}}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
							{row.getIsExpanded() && (
								<>
									<tr>
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className="px-4 py-2 border-b text-gray-800"
												style={{
													fontSize: TABLE_STYLE.fontSize,
												}}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
									<tr>
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className="px-4 py-2 border-b text-gray-800"
												style={{
													fontSize: TABLE_STYLE.fontSize,
												}}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
									<tr>
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className="px-4 py-2 border-b text-gray-800"
												style={{
													fontSize: TABLE_STYLE.fontSize,
												}}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								</>
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
}
