import { createColumnHelper } from '@tanstack/react-table';
import { personDTO } from './dto/PersonDTO';
import { Table } from './features/Table';
import { PersonModel } from './models/PersonModel';
import fixture from './test/fixtures/people_1658611486788.json';

const { metadata, records } = personDTO(fixture);

const columnHelper = createColumnHelper<PersonModel>();

const columns = metadata.map((attribute) => {
	return columnHelper.accessor(attribute.id, {
		cell: (info) => {
			const value = info.getValue();

			if (value instanceof Date) {
				return value.toUTCString();
			}

			return value;
		},
		footer: (info) => info.column.id,
	});
});

function App() {
	return <Table columns={columns} data={records} />;
}

export default App;
