import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { expect, test } from 'jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import reverse from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});

test('reverse long text', () => {
    const text = readFixtureFile('data.txt');
    const result = readFixtureFile('result.txt');
    expect(reverse(text)).toEqual(result);
});