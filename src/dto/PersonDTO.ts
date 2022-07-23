import { MetadataType } from '../models/MetadataModel';
import { type PersonModel } from '../models/PersonModel';
import fixture from '../test/fixtures/people_1658611486788.json';

export const personDTO = (rawData: typeof fixture) => {
	const [recordSample] = rawData.records;
	const dateAttrs: (keyof typeof rawData['records'][number])[] = [];

	const metadata = rawData.metadata.map((attribute) => {
		const id = Object.keys(recordSample).find(
			(key) => key === attribute.id
		) as keyof PersonModel;

		if (!id) {
			throw new Error('unknown id');
		}

		const type = Object.values(MetadataType).find(
			(type) => type === attribute.type
		);

		if (!type) {
			throw new Error('unknown type');
		}

		if (type === MetadataType.DATETIME || type === MetadataType.DATE) {
			dateAttrs.push(id);
		}

		return {
			...attribute,
			id: attribute.id as keyof typeof rawData.records[number],
			type,
		};
	});

	const records = dateAttrs.length
		? rawData.records.map((record) => ({
				...record,
				...Object.fromEntries(
					dateAttrs.map((attributeId) => [
						attributeId,
						new Date(record[attributeId]),
					])
				),
		  }))
		: rawData.records;

	return { metadata, records };
};
