import { Table } from '../components/Table';
import { useTable } from '../hooks/useTable';

export type TableContainerProps = {
	columns: any[];
	data: any[];
};

/**
 * Connects UI with the UI-agnostic logic
 */
export const TableContainer = (props: TableContainerProps) => {
	const table = useTable({
		columns: props.columns,
		data: props.data,
	});

	return (
		<Table
			headerGroups={table.getHeaderGroups()}
			rows={table.getRowModel().rows}
			footerGroups={table.getFooterGroups()}
		/>
	);
};
