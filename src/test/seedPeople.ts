import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { metadata } from '../models/PersonModel';
import { personFactory } from './personFactory';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const records = Array(20)
	.fill(null)
	.map(() => personFactory.build());

console.log({ metadata, records });

fs.writeFileSync(
	path.resolve(dirname, `fixtures/people_${new Date().getTime()}.json`),
	JSON.stringify({ metadata, records }, null, '\t'),
	'utf-8'
);
