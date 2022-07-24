import { flexRender, type Row, type HeaderGroup } from '@tanstack/react-table';

export type TableProps = {
	headerGroups: HeaderGroup<unknown>[];
	rows: Row<unknown>[];
	footerGroups: HeaderGroup<unknown>[];
};

/**
 * UI implementation
 */
export const Table = ({ headerGroups, rows, footerGroups }: TableProps) => {
	return (
		<table>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr
						key={headerGroup.id}
						data-testid={`headerGroup-${headerGroup.id}`}
					>
						{headerGroup.headers.map((header) => (
							<th key={header.id} data-testid={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
									  )}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id} data-testid={`cell_${cell.id}`}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot>
				{footerGroups.map((footerGroup) => (
					<tr key={footerGroup.id}>
						{footerGroup.headers.map((header) => (
							<th key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.footer,
											header.getContext()
									  )}
							</th>
						))}
					</tr>
				))}
			</tfoot>
		</table>
	);
};
