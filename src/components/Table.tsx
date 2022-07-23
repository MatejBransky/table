export type TableProps = {
	// TODO improve types
	data: any[];
	attributes: any[];
};

export const Table = ({ data, attributes }: TableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Last name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{data.map((record) => (
					<tr key={record.id}>
						{attributes.map((attribute) => (
							<td
								key={attribute.name}
								data-testid={`attribute-${attribute.name}`}
							>
								{record[attribute.name]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
