export enum MetadataType {
	STRING = 'string',
	NUMBER = 'number',
	DATE = 'date',
	DATETIME = 'datetime',
	BOOLEAN = 'boolean',
}

export type MetadataModel = {
	id: string;
	label: string;
	type: MetadataType;
};
