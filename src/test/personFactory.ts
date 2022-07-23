import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { metadata, type PersonModel } from '../models/PersonModel';

export const generator = {
	firstname: () => faker.name.firstName(),
	lastname: () => faker.name.lastName(),
	email: (person: Partial<PersonModel>) =>
		faker.internet.email(person.firstname, person.lastname),
	age: () => faker.datatype.number({ min: 16, max: 100 }),
	updatedAt: () =>
		faker.date.recent(faker.datatype.number({ min: 1, max: 3000 })),
} as const;

export const personFactory = Factory.define<PersonModel>(() => {
	return metadata.reduce((acc, attribute) => {
		return { ...acc, [attribute.id]: generator[attribute.id](acc) };
	}, {} as PersonModel);
});
