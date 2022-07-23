import { type MetadataModel, MetadataType } from './MetadataModel';

export const metadata = [
	{
		id: 'firstname',
		label: 'Name',
		type: MetadataType.STRING,
	},
	{
		id: 'lastname',
		label: 'Lastname',
		type: MetadataType.STRING,
	},
	{
		id: 'email',
		label: 'Email',
		type: MetadataType.STRING,
	},
	{
		id: 'age',
		label: 'Age',
		type: MetadataType.NUMBER,
	},
	{
		id: 'updatedAt',
		label: 'Updated at',
		type: MetadataType.DATETIME,
	},
] as const;

export type PersonAttributes<M extends MetadataModel = MetadataModel> = Record<
	M['id'],
	string | number | boolean | Date
>;

export type PersonModel = {
	firstname: string;
	lastname: string;
	email: string;
	age: number;
	updatedAt: Date;
};
