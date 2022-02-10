import { readFileSync } from 'fs';
import { tableFromIPC } from 'apache-arrow';


console.log('reading js produced arrow file');
const jsarrow = readFileSync('jsarrow.arrow');
const jstable = tableFromIPC(jsarrow);

console.table(jstable.toArray().slice(0, 10));


console.log('reading py produced arrow file');
const pyarrow = readFileSync('pyarrow.arrow');
const pytable = tableFromIPC(pyarrow);

console.table(pytable.toArray().slice(0, 10));
