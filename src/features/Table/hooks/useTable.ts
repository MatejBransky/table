import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

export type UseTableOptions = {
	columns: any[];
	data: any[];
};

/**
 * UI-agnostic implementation
 */
export const useTable = (options: UseTableOptions) => {
	const table = useReactTable({
		data: options.data,
		columns: options.columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return table;
};
