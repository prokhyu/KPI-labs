type Value = number | string | boolean;

const values: Value[] = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  42,
  'TypeScript',
  true,
  3.14,
  'GitHub',
  -10,
  false,
  100,
];

const types: Record<string, number> = {};

for (const value of values) {
  const type = typeof value;

  if (types[type] === undefined) {
    types[type] = 0;
  }

  types[type] += 1;
}

console.dir(types);
