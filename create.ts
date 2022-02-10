import {tableToIPC, tableFromArrays} from 'apache-arrow';
import fs from 'fs';

const LENGTH = 2000;

const rainAmounts = Float32Array.from(
    { length: LENGTH },
    () => Number((Math.random() * 20).toFixed(1)));

const rainDates = Array.from(
    { length: LENGTH },
    (_, i) => new Date(Date.now() - 1000 * 60 * 60 * 24 * i));

const rainfall = tableFromArrays({
    precipitation: rainAmounts,
    date: rainDates
});


const outputTable = tableToIPC(rainfall);

fs.writeFileSync('jsarrow.arrow', outputTable);